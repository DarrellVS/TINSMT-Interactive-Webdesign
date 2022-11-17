import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import BlueHighlight from "../../components/BlueHighlight";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";
import { useQuiz } from "../../context/quizContext";

export default function QuizPageOne() {
  const { syncQuestionIndex, displayAnswer } = useQuiz();
  useEffect(() => {
    syncQuestionIndex(0);
  }, [syncQuestionIndex]);

  return (
    <SlideWrapper>
      <Box alignSelf="center">
        <PageHeading query="quiz">OPGELET HET IS QUIZ TIJD</PageHeading>
        <Button mt="2rem" colorScheme="blue" onClick={() => displayAnswer(0)}>
          Antwoord
        </Button>
      </Box>

      <Box>
        <Heading mt="1rem" size="2xl">
          Wat is <BlueHighlight>vereiste</BlueHighlight> voor een component?
        </Heading>

        <CustomList spacing=".5rem" mt="1.5rem">
          <CustomListItem icon={<Text>A</Text>}>
            Geschreven met standaard HTML tags
          </CustomListItem>
          <CustomListItem icon={<Text>B</Text>}>
            Moet beginnen met een hoofdletter
          </CustomListItem>
          <CustomListItem icon={<Text>C</Text>}>
            Moet een hook bevatten
          </CustomListItem>
        </CustomList>
      </Box>
    </SlideWrapper>
  );
}
