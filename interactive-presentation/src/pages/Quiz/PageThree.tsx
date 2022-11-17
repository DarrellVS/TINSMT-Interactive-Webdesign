import { Text, Image, Heading, Box, Button } from "@chakra-ui/react";
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

export default function QuizPageThree() {
  const { syncQuestionIndex, displayAnswer } = useQuiz();
  useEffect(() => {
    syncQuestionIndex(2);
  }, [syncQuestionIndex]);

  return (
    <>
      <Layout>
        <Box alignSelf="center">
          <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>
          <Button mt="2rem" colorScheme="blue" onClick={() => displayAnswer(2)}>
            Antwoord
          </Button>
        </Box>
        <AnimatedPageTransition>
          <Heading mt="1rem" size="2xl">
            Wat ziet de gebruiker op zijn <BlueHighlight>scherm</BlueHighlight>{" "}
            wanneer je dit code fragment implementeert?
          </Heading>

          <Image src="/images/auto-code.png" rounded="7.5px" mt="1rem" />

          <CustomList spacing=".5rem" mt="1.5rem">
            <CustomListItem
              icon={<Text>A</Text>}
            >{`<Text>vroem<Text>`}</CustomListItem>
            <CustomListItem icon={<Text>B</Text>}>{`vroem`}</CustomListItem>
            <CustomListItem
              icon={<Text>C</Text>}
            >{`<p>vroem</p>`}</CustomListItem>
            <CustomListItem icon={<Text>D</Text>}>
              Het scherm blijft leeg
            </CustomListItem>
          </CustomList>
        </AnimatedPageTransition>

        <Footnote />
      </Layout>
      <QuizStats />
    </>
  );
}
