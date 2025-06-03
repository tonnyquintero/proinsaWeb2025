/* eslint-disable no-unused-vars */
import React from "react";

import Image from "next/image";
import styles from "../styles/about.module.css";
import AboutPic from "../assets/sus1.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className={styles.claroH5}>Conócenos</h5>
      <h1 className="text-center">Acerca de Nosotros</h1>

      <div className={styles.about_container}>
        <div className={styles.about_me}>
          <div className={styles.about_meImage}>
            <Image src={AboutPic} alt="About Image" />
          </div>
        </div>
        <div className={styles.about_content}>
          <div className={styles.about_cards}>
            <article className={styles.about_card}>
              <FaAward className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Experiencia</h5>
              <small className={styles.smallClaro}>+30 años</small>
            </article>
            <article className={styles.about_card}>
              <FiUsers className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Clientes</h5>
              <small className={styles.smallClaro}>+1000</small>
            </article>
            <article className={styles.about_card}>
              <VscFolderLibrary className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Sonrisas</h5>
              <small className={styles.smallClaro}>+5000</small>
            </article>
          </div>
          <p className={styles.claroP}>
            Venezuelan developer, exercise books and learning are some of my
            hobbies. Activist in favor of technology as therapy for the world.
          </p>
          <a href="#contact" className={styles.primaryLight}>
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
