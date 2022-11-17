import { Server, Socket } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: "*",
  },
});

let questionIndex = 0;
let amountOfAnswers = 0;
let amountConnected = 0;

const answers = ["B", "D", "B", "A", "B"];

function isAuthd(socket: Socket) {
  return socket.handshake.query.api_key === "NietDezeKeer";
}

io.on("connection", (socket) => {
  amountConnected++;
  socket.emit("amountConnected", amountConnected - 1);
  socket.broadcast.emit("amountConnected", amountConnected - 1);
  socket.emit("syncQuestionIndex", questionIndex);
  console.log("a user connected");

  socket.on("syncQuestionIndex", (index) => {
    if (!isAuthd(socket)) return;
    socket.broadcast.emit("syncQuestionIndex", index);
    questionIndex = index;
    amountOfAnswers = 0;
    socket.emit("amountOfAnswers", amountOfAnswers);
  });

  socket.on("displayAnswer", (index) => {
    if (!isAuthd(socket)) return;
    socket.broadcast.emit("displayAnswer", {
      question: index,
      answer: answers[index],
    });
  });

  socket.on("finishedQuestion", () => {
    amountOfAnswers++;
    socket.broadcast.emit("amountOfAnswers", amountOfAnswers);
  });

  socket.on("disconnect", () => {
    amountConnected--;
    socket.broadcast.emit("amountConnected", amountConnected - 1);
    console.log("a user disconnected");
  });
});
