import { motion } from "framer-motion";
import React from "react";
import Layout from "./Layout";
import Footnote from "./FootNote";

export function AnimatedPageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

export default function SlideWrapper({
  children,
  hideFootnote,
}: {
  children: React.ReactNode;
  hideFootnote?: boolean;
}) {
  return (
    <>
      <AnimatedPageTransition>
        <Layout>{children}</Layout>
      </AnimatedPageTransition>
      {!hideFootnote && <Footnote />}
    </>
  );
}
