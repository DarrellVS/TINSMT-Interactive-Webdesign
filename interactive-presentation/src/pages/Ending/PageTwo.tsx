import { Box, Text, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageHeading from "../../components/PageHeading";
import SlideWrapper from "../../components/SlideWrapper";

export default function EndingPageTwo() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <SlideWrapper hideFootnote>
      <Box>
        <PageHeading query="klaar">Zo.</PageHeading>
        <PageHeading query="klaar">klaar!</PageHeading>
      </Box>
      <Box alignSelf={"center"}>
        <Heading size="2xl">Vragen?</Heading>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.5,
          }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "20vh",
                left: "30vw",
                transform: "rotate(-30deg)",
              }}
            >
              <Text>Wat is je lievelings eten?</Text>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "58vh",
                right: "8vw",
                transform: "rotate(20deg)",
              }}
            >
              <Text>Soep met een vork of een lepel?</Text>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "15vh",
                right: "22vw",
                transform: "rotate(-10deg)",
              }}
            >
              <Text>Light of dark mode?</Text>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "72vh",
                left: "5vw",
                transform: "rotate(15deg)",
              }}
            >
              <Text>Alles of nog iets?</Text>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "83vh",
                right: "42vw",
                transform: "rotate(-7deg)",
              }}
            >
              <Text>Thee met of zonder suiker?</Text>
            </motion.div>
          </motion.div>
          <motion.div variants={item}>
            <motion.div
              style={{
                position: "absolute",
                top: "8vh",
                left: "4vw",
                transform: "rotate(15deg)",
              }}
            >
              <Text>Ik weet geen vragen meer</Text>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </SlideWrapper>
  );
}
