import { Server, Socket } from "socket.io";

const io = new Server(8000, {
  cors: {
    origin: "*",
  },
});

let questionIndex = 0;

const answers = ["B", "D", "B", "A", "B"];

function isAuthd(socket: Socket) {
  return socket.handshake.query.api_key !== "NietDezeKeer";
}

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("syncQuestionIndex", questionIndex);

  socket.on("syncQuestionIndex", (index) => {
    if (isAuthd(socket)) return;
    console.log("syncQuestionIndex", index);
    socket.broadcast.emit("syncQuestionIndex", index);
    questionIndex = index;
  });

  socket.on("displayAnswer", (index) => {
    if (isAuthd(socket)) return;
    console.log("displayAnswer for index ", index, "answer is", answers[index]);
    socket.broadcast.emit("displayAnswer", {
      question: index,
      answer: answers[index],
    });
  });
});
