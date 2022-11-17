import { Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import BlueHighlight from "../../components/BlueHighlight";
import { useQuiz } from "../../context/quizContext";
import AnswerButton from "../../components/AnswerButton";

export default function QuizPageFour() {
  const { addAnswer, getAnswer, useIsAnswered } = useQuiz();
  const isAnswered = useIsAnswered(3);
  const answer = getAnswer(3);
  if (!answer) return <></>;

  return (
    <Layout>
      <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Welk codefragment is <BlueHighlight>het beste</BlueHighlight> wanneer
          ik conditioneel wil renderen?
        </Heading>

        <CustomList spacing="2rem" mt="1.5rem">
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 3, answer: "A" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                A
              </AnswerButton>
            }
          >
            {`{ isRaining ?`}
            <br />
            {`"Het regent" : `}
            <br />
            {`"Het regent niet" }`}
          </CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 3, answer: "B" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                B
              </AnswerButton>
            }
          >
            {`{ isRaining &&`}
            <br />
            {`"Het regent" }`}
            <br />
            {`{ !isRaining &&`}
            <br />
            {`"Het regent niet" }`}
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
    </Layout>
  );
}
