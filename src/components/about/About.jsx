import React from "react";
import "./about.css";

import { motion } from "framer-motion";
import { BsFillBriefcaseFill, BsFolderCheck } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { leftAnimate, rightAnimate, upAnimate } from "../../animations";
import Video from "./Video";

export const About = () => {
  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="about"
    >
      <motion.h5 variants={leftAnimate}>Get To Know</motion.h5>
      <motion.h2 variants={rightAnimate}>About Me</motion.h2>

      <div className="container about__container">
        <motion.div variants={leftAnimate} className="about__me">
          <Video />
        </motion.div>
        <div className="about__content">
          <motion.div
            variants={upAnimate}
            transition={{ staggerChildren: 0.5 }}
            className="about__cards"
          >
            <article className="about__card">
              <BsFillBriefcaseFill className="about__icon" />
              <h5>Experience</h5>
              <small>2 years of Full Stack Software Engineer</small>
            </article>
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Education</h5>
              <small>2:1 Chemistry Bsc</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>Present in Portfolio</small>
            </article>
          </motion.div>
          <motion.p variants={leftAnimate}>
            <p>
              I’m a highly adaptable and flexible Software Engineer with two
              years of industry experience based in Northwest London. I have an
              in-depth understanding of software development practices and their
              frequent trade-offs. I come from a scientific academic background
              in chemistry with a focus on computational quantum mechanics.
            </p>
            <p>
              Within the software engineering industry, I have been exposed to
              many different technologies. I love expanding my technical
              knowledge. Techs that I have extensive experience in are
              Typescript, C#, Next.js, React.js, Python, React Redux, Angular
              17, NGRX, Node.js, Express, Flask, ASP.NET, NestJS, Stripe API,
              Passport JWT, Microsoft SQL Server, MongoDB, Nginx, Azure, AWS
              with CDK, CI/CD pipelines with GitHub Actions and Docker.
            </p>
          </motion.p>
          <motion.a
            variants={upAnimate}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
