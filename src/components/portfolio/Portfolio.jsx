import React from "react";
import "./portfolio.css";

import { motion } from "framer-motion";
import {
  leftAnimate,
  rightAnimate,
  upAnimate
} from "../../animations";
export const Portfolio = () => {
  return (
    <motion.section
      initial={"offscreen"}
      animate={"onscreen"}
      transition={{ staggerChildren: 0.5 }}
      id="portfolio"
    >
      <motion.h5 variants={leftAnimate}>My Current Work</motion.h5>
      <motion.h2 variants={rightAnimate}>Portfolio</motion.h2>
      <div className="container portfolio__container">
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="p-1 text-lg font-bold underline text-primary">
            AI-TICULATE
          </div>
          <div className="p-2">
            This project was to assist a self taught developer I have mentoring
            getting into the software industry.
          </div>
          <p className="p-2">
            The project came to me as a local running react app which I helped
            convert into a full stack application.
          </p>
          <p className="p-2">
            Using AWS cdk to deploy a EC2 instance configured with a nginx web
            server that reverse proxies to a containerized express application
            server which uses OpenAI GPT-3.5 model via the OpenAI API to
            generate trivia questions and answers. The web server accessible via
            a Cloudflare DNS and has certificate manager for HTTPS. There are
            future plans to implement a CI/CD pipeline with GitHub Actions.
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/ai-ticulate/ai-ticulate"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="p-1 text-lg font-bold underline text-primary">
            Seurat Project
          </div>
          <p className="p-2">
            This project initially was designed to expand my knowledge on AWS
            serverless architecture. I initially created a diagram of the
            infrastructure required to produces a social network for artists. In
            order to achieve a real time chat feature both HTTP API Gateway and
            Websocket API Gateway were used to trigger AWS Lambda functions
            which interacted with a DynamoDB table via a SQS queue. This
            serverless application would be authenticate via a cognito user pool
            and accessible to public web via DNS via a Route 53 hosted zone.
          </p>
          <p className="p-2">
            For local development In the first sprint I configured a NestJS
            WebSocket using Socket.IO dependency
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Kyle-HeatEng/seurat_project/tree/1-sprint-1-websocket-api-aws-lambda-dynamodb"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </motion.article>
        <motion.article variants={upAnimate} className="portfolio__item">
          <div className="p-1 text-lg font-bold underline text-primary">
            Snake Unity
          </div>
          <p className="p-2">
            A modern take on the classic Snake game, developed with Unity. This
            project aims to explore more in-depth aspects of Unity, utilize C#
            events for gameplay mechanics, and incorporate 3D modeling to bring
            a fresh perspective to the iconic game.
          </p>
          <p className="p-2">
            Main purpose of this application was to expand my existing knowledge
            of Unity and C#. With a focus on Dotnet's action api to decouple
            game logic from the game view.
          </p>
          <p className="p-2">
            The game features a 3D snake that grows in size as it consumes
            objects in the game world. 
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Kyle-HeatEng/snake-unity"
              className="btn"
              target="_blank"
            >
              Github
            </a>
          </div>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default Portfolio;
