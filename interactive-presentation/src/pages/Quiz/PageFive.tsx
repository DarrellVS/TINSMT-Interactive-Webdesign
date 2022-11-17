import { Text, Heading, Box, Button } from "@chakra-ui/react";
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

export default function QuizPageFive() {
  const { syncQuestionIndex, displayAnswer } = useQuiz();
  useEffect(() => {
    syncQuestionIndex(4);
  }, [syncQuestionIndex]);

  return (
    <>
      <Layout>
        <Box alignSelf="center">
          <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>
          <Button mt="2rem" colorScheme="blue" onClick={() => displayAnswer(4)}>
            Antwoord
          </Button>
        </Box>

        <AnimatedPageTransition>
          <Heading mt="1rem" size="2xl">
            Wanneer ik een list render met <BlueHighlight>map()</BlueHighlight>{" "}
            moet ik een bepaald argument meegeven aan de children.
          </Heading>

          <CustomList spacing=".5rem" mt="1.5rem">
            <CustomListItem icon={<Text>A</Text>}>index</CustomListItem>
            <CustomListItem icon={<Text>B</Text>}>key</CustomListItem>
            <CustomListItem icon={<Text>C</Text>}>seed</CustomListItem>
            <CustomListItem icon={<Text>D</Text>}>item</CustomListItem>
          </CustomList>
        </AnimatedPageTransition>

        <Footnote />
      </Layout>
      <QuizStats />
    </>
  );
}
