import { Heading } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import CustomList from "../../components/List/CustomList";
import CustomListItem from "../../components/List/CustomListItem";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function PropPassingPageTwo() {
  return (
    <Layout>
      <PageHeading query="componenten">Slimme componenten</PageHeading>

      <AnimatedPageTransition>
        <Heading mt="1rem" size="2xl">
          Meest veelzijdige stukje component
        </Heading>

        <CustomList mt="1rem">
          <CustomListItem icon={<BsDot />}>Strings</CustomListItem>
          <CustomListItem icon={<BsDot />}>Numbers</CustomListItem>
          <CustomListItem icon={<BsDot />}>Arrays</CustomListItem>
          <CustomListItem icon={<BsDot />}>Objects</CustomListItem>
          <CustomListItem icon={<BsDot />}>Functions</CustomListItem>
          <CustomListItem icon={<BsDot />}>Custom types</CustomListItem>
        </CustomList>
      </AnimatedPageTransition>
      <FootNote />
    </Layout>
  );
}
