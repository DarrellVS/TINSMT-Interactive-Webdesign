import { Box, Heading } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function EndingPageOne() {
  return (
    <SlideWrapper hideFootnote>
      <PageHeading query="nerds">Voor de nerds</PageHeading>
      <Box alignSelf={"center"}>
        <Heading size="2xl">Handige linkjes</Heading>
        <CustomList mt="1rem">
          <CustomListItem icon={<BsDot />}>
            ReactJS: https://reactjs.org/
          </CustomListItem>
          <CustomListItem icon={<BsDot />}>
            W3 Schools: https://www.w3schools.com/REACT/DEFAULT.ASP
          </CustomListItem>
          <CustomListItem icon={<BsDot />}>
            React - Typescript:
            https://www.typescriptlang.org/docs/handbook/react.html
          </CustomListItem>
        </CustomList>
      </Box>
    </SlideWrapper>
  );
}
