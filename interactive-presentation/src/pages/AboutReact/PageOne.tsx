import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import { SiJavascript } from "react-icons/si";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import SlideWrapper from "../../components/SlideWrapper";
import ExampleComponent from "../../components/ExampleComponents/Counter";
import PageHeading from "../../components/PageHeading";

export default function AboutReact() {
  return (
    <SlideWrapper>
      <PageHeading query="nooit">
        React? Daar heb ik nog nooit van gehoord
      </PageHeading>

      <Box>
        <Heading mt="1rem" size="2xl">
          Wat is React?
        </Heading>

        <CustomList mt="1rem">
          <CustomListItem icon={<BsFillDiagram2Fill />}>
            Component Based
          </CustomListItem>
          <CustomListItem icon={<SiJavascript />}>
            JavaScript library
          </CustomListItem>
          <CustomListItem icon={<FaReact />}>
            Reactive User Interfaces (UI)
          </CustomListItem>
        </CustomList>

        <Grid mt="4rem" position="relative">
          <Image
            position="absolute"
            src="/images/arrow_down_left_curve.png"
            h="60%"
            top="25px"
            left="-55px"
          />
          <Heading size="2xl">Component</Heading>
          <ExampleComponent />
        </Grid>
      </Box>
    </SlideWrapper>
  );
}
