import { motion } from "framer-motion";
import React from "react";
import {
  leftAnimate,
  opAnimation,
  rightAnimate,
  upAnimate,
} from "../../animations";
import CTA from "./CTA";
import FaceMorph from "./FaceMorph";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className="container header__container"
      >
        <motion.h5 variants={leftAnimate}>Hello I'm</motion.h5>
        <motion.h1 variants={rightAnimate}>Kyle Albert</motion.h1>
        <motion.h5 variants={leftAnimate} className="text-light">
          Full Stack Software Engineer
        </motion.h5>
        <motion.h5 variants={rightAnimate} className="text-light">
          Software solution designer and creative
        </motion.h5>
        <motion.div variants={leftAnimate}>
          <CTA />
        </motion.div>

        <HeaderSocials />

        <motion.div variants={upAnimate} className="me">
          <FaceMorph />
        </motion.div>

        <a variants={opAnimation} href="#contact" className="scroll__down">
          Contact Me
        </a>
      </motion.div>
    </header>
  );
};

export default Header;
