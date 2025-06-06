/* eslint-disable no-unused-vars */
import React from "react";

import Image from "next/image";
import styles from "../styles/about.module.css";
import AboutPic from "../assets/sus1.png";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaRegSmileBeam } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5 className={styles.claroH5}>Conócenos</h5>
      <h1
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "larger" }}
      >
        Acerca de Nosotros
      </h1>

      <div className={styles.about_container}>
        <div className={styles.about_me}>
          <div className={styles.about_meImage}>
            <Image src={AboutPic} alt="About Image" />
          </div>
        </div>
        <div className={styles.about_content}>
          <div className={styles.about_cards}>
            <article className={styles.about_card2}>
              <FaAward className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Experiencia</h5>
              <small className={styles.smallClaro}>+30 años</small>
            </article>
            <article className={styles.about_card3}>
              <FiUsers className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Profesionales Atendiendo</h5>
              <small className={styles.smallClaro}>8</small>
            </article>
            <article className={styles.about_card1}>
              <FaRegSmileBeam className={styles.about_icon} />
              <h5 className={styles.h5Claro}>Clientes Felices</h5>
              <small className={styles.smallClaro}>+5000</small>
            </article>
          </div>
          <p className={styles.claroP}>
            En nuestra clínica dental, transformamos sonrisas y experiencias.
            Más que un consultorio, somos un espacio de confianza donde la salud
            bucal y la atención personalizada se unen para ofrecerte lo mejor.
            Nuestro equipo de especialistas combina tecnología de vanguardia,
            calidez humana y pasión por el detalle, para brindarte tratamientos
            seguros, cómodos y con resultados que hablan por sí solos. Ven a
            descubrir una nueva forma de ir al dentista: sin miedo, sin estrés,
            ¡y con muchas razones para sonreír!
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
