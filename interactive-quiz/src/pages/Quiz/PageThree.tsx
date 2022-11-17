import { Image, Heading } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import BlueHighlight from "../../components/BlueHighlight";
import { useQuiz } from "../../context/quizContext";
import AnswerButton from "../../components/AnswerButton";

export default function QuizPageThree() {
  const { addAnswer, getAnswer, useIsAnswered } = useQuiz();
  const isAnswered = useIsAnswered(2);
  const answer = getAnswer(2);
  if (!answer) return <></>;

  return (
    <Layout>
      <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Wat ziet de gebruiker op zijn <BlueHighlight>scherm</BlueHighlight>{" "}
          wanneer je dit code fragment implementeert?
        </Heading>

        <Image src="/images/auto-code.png" rounded="7.5px" mt="1rem" />

        <CustomList spacing=".5rem" mt="1.5rem">
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 2, answer: "A" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                A
              </AnswerButton>
            }
          >{`<Text>vroem<Text>`}</CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 2, answer: "B" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                B
              </AnswerButton>
            }
          >{`vroem`}</CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 2, answer: "C" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                C
              </AnswerButton>
            }
          >{`<p>vroem</p>`}</CustomListItem>
          <CustomListItem
            icon={
              <AnswerButton
                onClick={() => {
                  addAnswer({ question: 2, answer: "D" });
                }}
                isDisabled={isAnswered}
                answer={answer}
              >
                D
              </AnswerButton>
            }
          >
            Het scherm blijft leeg
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
    </Layout>
  );
}
