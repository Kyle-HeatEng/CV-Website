import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import {
  leftAnimate,
  rightAnimate,
  upAnimate
} from "../../animations";
import "./contact.css";
export const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_b1wj3gj",
        "template_b2npkpt",
        form.current,
        "XtvcfCWfHOXEX9ByV"
      )
      

    e.target.reset();
  };

  return (
    <motion.section
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      id="contact"
    >
      <motion.h5 variants={leftAnimate}>Give Me A Message</motion.h5>
      <motion.h2 variants={rightAnimate}>Contact Me</motion.h2>

      <motion.form variants={upAnimate} ref={form} onSubmit={sendEmail}>
        <input className="p-2" type="text" name="name" placeholder="Who are you?" required />
        <input className="p-2" type="email" name="email" placeholder="Email" required />
        <textarea className="p-2"
          name="message"
          rows="7"
          placeholder="Say Hi :}"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
