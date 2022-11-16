import FootNote from "../../components/FootNote";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import { AnimatedPageTransition } from "../../components/SlideWrapper";

export default function ExamplePageTwo() {
  return (
    <Layout>
      <PageHeading query="Samen">Nu samen.</PageHeading>

      <AnimatedPageTransition>{/* Hier de counter! */}</AnimatedPageTransition>

      <FootNote />
    </Layout>
  );
}
