import { Text, Heading, Button, Box } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import Footnote from "../../components/FootNote";
import BlueHighlight from "../../components/BlueHighlight";
import { useQuiz } from "../../context/quizContext";
import { useEffect } from "react";
import QuizStats from "../../components/QuizStats";

export default function QuizPageFour() {
  const { syncQuestionIndex, displayAnswer } = useQuiz();
  useEffect(() => {
    syncQuestionIndex(3);
  }, [syncQuestionIndex]);

  return (
    <>
      <Layout>
        <Box alignSelf="center">
          <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>
          <Button mt="2rem" colorScheme="blue" onClick={() => displayAnswer(3)}>
            Antwoord
          </Button>
        </Box>

        <AnimatedPageTransition>
          <Heading mt="1rem" size="2xl">
            Welk codefragment is <BlueHighlight>het beste</BlueHighlight>{" "}
            wanneer ik conditioneel wil renderen?
          </Heading>

          <CustomList spacing="2rem" mt="1.5rem">
            <CustomListItem icon={<Text>A</Text>}>
              {`{ isRaining ?`}
              <br />
              {`"Het regent" : `}
              <br />
              {`"Het regent niet" }`}
            </CustomListItem>
            <CustomListItem icon={<Text>B</Text>}>
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

        <Footnote />
      </Layout>
      <QuizStats />
    </>
  );
}
