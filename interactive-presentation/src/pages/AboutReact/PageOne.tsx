import { Box, Grid, Heading, Text, Image } from "@chakra-ui/react";
import BlueHighlight from "../../components/BlueHighlight";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import { SiJavascript } from "react-icons/si";
import { BsFillDiagram2Fill } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import SlideWrapper from "../../components/SlideWrapper";
import ExampleComponent from "../../components/ExampleComponents/Counter";

export default function AboutReact() {
  return (
    <SlideWrapper>
      <Grid h="100vh" templateColumns="auto" alignItems="center">
        <Grid templateColumns="1fr 1.25fr" gap="10rem">
          <Box>
            <Heading size="4xl">
              <BlueHighlight query="nooit">
                React? Daar heb ik nog nooit van gehoord
              </BlueHighlight>
            </Heading>
            <Text mt="2rem" fontSize="lg" fontStyle="italic" color="gray.500">
              Dat gaan we veranderen
            </Text>
          </Box>

          <Box>
            <Heading mt="1rem" fontSize="2xl">
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
                top="15px"
                left="-45px"
              />
              <Heading>Component</Heading>
              <ExampleComponent />
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </SlideWrapper>
  );
}
