import { Text, Heading, Button, Box } from "@chakra-ui/react";
import BlueHighlight from "../../components/BlueHighlight";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";
import Footnote from "../../components/FootNote";
import { useQuiz } from "../../context/quizContext";
import { useEffect } from "react";

export default function QuizPageTwo() {
  const { syncQuestionIndex, displayAnswer } = useQuiz();
  useEffect(() => {
    syncQuestionIndex(1);
  }, [syncQuestionIndex]);

  return (
    <Layout>
      <Box alignSelf="center">
        <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>
        <Button mt="2rem" colorScheme="blue" onClick={() => displayAnswer(1)}>
          Antwoord
        </Button>
      </Box>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Welke <BlueHighlight>hook</BlueHighlight> reageert op veranderingen
          van een state?
        </Heading>

        <CustomList spacing=".5rem" mt="1.5rem">
          <CustomListItem icon={<Text>A</Text>}>useState</CustomListItem>
          <CustomListItem icon={<Text>B</Text>}>useCallback</CustomListItem>
          <CustomListItem icon={<Text>C</Text>}>useChange</CustomListItem>
          <CustomListItem icon={<Text>D</Text>}>useEffect</CustomListItem>
          <CustomListItem icon={<Text>E</Text>}>
            Dat kan helemaal niet
          </CustomListItem>
        </CustomList>
      </AnimatedPageTransition>

      <Footnote />
    </Layout>
  );
}
