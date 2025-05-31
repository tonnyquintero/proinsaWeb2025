/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footer_logo}>
        PROINSA S.A.S. &copy;
      </a>

      <ul className={styles.permalinks}>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#about">Acerca de Nosotros</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>

        <li>
          <a href="#testimonials">Blog</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <p>Horarios xxxxxxxxxxxxxxx</p>

      <div className={styles["tonny-div"]}>
        <small className={styles["tonny"]}>
          Desarrollado por Tonny Quintero &copy; todos los derechos reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
