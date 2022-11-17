import { Heading } from "@chakra-ui/react";
import AnswerButton from "../../components/AnswerButton";
import BlueHighlight from "../../components/BlueHighlight";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import { useQuiz } from "../../context/quizContext";

export default function QuizPageOne() {
  const { addAnswer, useIsAnswered, getAnswer } = useQuiz();
  const isAnswered = useIsAnswered(0);
  const answer = getAnswer(0);
  if (!answer) return <></>;

  console.log(answer);

  return (
    <Layout>
      <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Wat is <BlueHighlight>vereiste</BlueHighlight> voor een component?
        </Heading>

        <CustomList spacing="1rem" mt="1.5rem">
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 0, answer: "A" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                A
              </AnswerButton>
            }
          >
            Geschreven met standaard HTML tags
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 0, answer: "B" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                B
              </AnswerButton>
            }
          >
            Moet beginnen met een hoofdletter
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 0, answer: "C" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                C
              </AnswerButton>
            }
          >
            Moet een hook bevatten
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
    </Layout>
  );
}
