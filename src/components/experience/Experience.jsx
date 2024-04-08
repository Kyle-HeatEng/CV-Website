import { motion } from "framer-motion";
import React from "react";
import {
  leftAnimate,
  rightAnimate,
  upAnimate
} from "../../animations";
import { Dispace } from "./Companys/Dispace";
import { HeatEngineer } from "./Companys/HeatEngineer";
import "./experience.css";
export const Experience = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="experience"
    >
      <motion.h5 variants={leftAnimate}>The Skills I Have</motion.h5>
      <motion.h2 variants={rightAnimate}>My Experience</motion.h2>

      <motion.div
        variants={upAnimate}
        className="container experience__container"
      >
        <HeatEngineer />
        <Dispace />
      </motion.div>
    </motion.section>
  );
};

export default Experience;
