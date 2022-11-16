import { Box, Text, Heading } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import BlueHighlight from "../../components/BlueHighlight";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function HooksPageOne() {
  return (
    <SlideWrapper>
      <PageHeading query="useState">
        Die useState, wat doet dat nou eigenlijk?
      </PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Hooks
        </Heading>
        <Text mt=".5rem">
          <BlueHighlight query="useState" css={{ fontWeight: "bold" }}>
            useState is een hook die je gebruikt om een state te maken.
          </BlueHighlight>
        </Text>
        <Text mt=".5rem">
          Hooks zijn een manier om functional components te maken. Functional
          components zijn components welke reageren op veranderende data.
        </Text>

        <Heading mt="3rem" size="2xl">
          Bestaan er nog meer hooks?
        </Heading>
        <Text mt=".5rem">Ja! Er bestaan nog veel meer hooks, zoals</Text>
        <CustomList spacing=".1rem" mt=".5rem">
          <CustomListItem icon={<BsDot />}>useEffect</CustomListItem>
          <CustomListItem icon={<BsDot />}>useCallback</CustomListItem>
          <CustomListItem icon={<BsDot />}>useMemo</CustomListItem>
          <CustomListItem icon={<BsDot />}>useContext</CustomListItem>
          <CustomListItem icon={<BsDot />}>useRef</CustomListItem>
          <CustomListItem icon={<BsDot />}>useReducer</CustomListItem>
        </CustomList>
      </Box>
    </SlideWrapper>
  );
}
