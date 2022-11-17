import { Heading } from "@chakra-ui/react";
import AnswerButton from "../../components/AnswerButton";
import BlueHighlight from "../../components/BlueHighlight";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import { useQuiz } from "../../context/quizContext";

export default function QuizPageTwo() {
  const { addAnswer, getAnswer, useIsAnswered } = useQuiz();
  const isAnswered = useIsAnswered(1);
  const answer = getAnswer(1);
  if (!answer) return <></>;

  return (
    <Layout>
      <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Welke <BlueHighlight>hook</BlueHighlight> reageert op veranderingen
          van een state?
        </Heading>

        <CustomList spacing=".5rem" mt="1.5rem">
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 1, answer: "A" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                A
              </AnswerButton>
            }
          >
            useState
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 1, answer: "B" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                B
              </AnswerButton>
            }
          >
            useCallback
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 1, answer: "C" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                C
              </AnswerButton>
            }
          >
            useChange
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 1, answer: "D" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                D
              </AnswerButton>
            }
          >
            useEffect
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 1, answer: "E" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                E
              </AnswerButton>
            }
          >
            Dat kan helemaal niet
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
    </Layout>
  );
}
