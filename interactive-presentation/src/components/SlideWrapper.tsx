import { motion } from "framer-motion";
import React from "react";
import FootNote from "./FootNote";
import Layout from "./Layout";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedPageTransition>
        <Layout>{children}</Layout>
      </AnimatedPageTransition>
      <FootNote />
    </>
  );
}
