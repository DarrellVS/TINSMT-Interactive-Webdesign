import { Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import BlueHighlight from "../../components/BlueHighlight";
import { useQuiz } from "../../context/quizContext";
import AnswerButton from "../../components/AnswerButton";

export default function QuizPageFive() {
  const { addAnswer, getAnswer, useIsAnswered } = useQuiz();
  const isAnswered = useIsAnswered(4);
  const answer = getAnswer(4);
  if (!answer) return <></>;

  return (
    <Layout>
      <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Wanneer ik een list render met <BlueHighlight>map()</BlueHighlight>{" "}
          moet ik een bepaald argument meegeven aan de children.
        </Heading>

        <CustomList spacing=".5rem" mt="1.5rem">
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 4, answer: "A" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                A
              </AnswerButton>
            }
          >
            index
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 4, answer: "B" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                B
              </AnswerButton>
            }
          >
            key
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 5, answer: "C" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                C
              </AnswerButton>
            }
          >
            seed
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 4, answer: "D" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                D
              </AnswerButton>
            }
          >
            item
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
    </Layout>
  );
}
