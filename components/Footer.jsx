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
          <a href="#testimonials">Canales</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <p style={{ paddingBottom: "1rem" }}>
        LAS CITAS DE VALORACION Y CONTINUACION DE TRATAMIENTO ES DE LUNES A
        VIERNES DE 7 AM HASTA LAS 6 PM Y LOS SABADOS DE 7 AM HASTA LA 1 PM
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        EL HORARIO DE URGENCIAS INICIA DE LUNES A SABADO DESDE LAS 7 AM
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        DOMINGOS Y FESTIVOS NO SE PRESTA SERVICIO
      </p>
      <p style={{ paddingBottom: "1rem" }}>
        CARRERA 52 # 95-91 SAN ISIDRO ARANJUEZ MEDELLIN
      </p>

      <div className={styles["tonny-div"]}>
        <small className={styles["tonny"]}>
          Desarrollado por Anthony Quintero &copy; todos los derechos reservados
        </small>
      </div>
    </footer>
  );
};

export default Footer;
