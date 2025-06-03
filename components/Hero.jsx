import React from "react";

import styles from "../styles/hero.module.css";
import Image from "next/image";
import Hero from "../assets/hero.png";
import Doc from "../assets/doc.png";

const Header = () => {
  return (
    <div className={styles["main"]}>
      <div className={styles["left"]}>
        <div className={styles["header"]}>
          <Image
            className={styles["sonrisa1"]}
            src={Hero}
            width={350}
            height={100}
            alt="logo"
          />
          <p className={styles.claroP}>
            Transformamos sonrisas con tecnología, calidez humana y atención
            personalizada. <br />
            En cada visita, cuidamos tu salud bucal con excelencia, compromiso{" "}
            <br /> y pasión por verte sonreír con confianza y tranquilidad
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles["btn"]}>
              Contáctanos
            </a>
            <a href="#portfolio" className={styles["btn-primary"]}>
              Servicios
            </a>
          </div>
        </div>
        <div className={styles["right"]}>
          <Image
            className={styles["sonrisa1"]}
            src={Doc}
            width={350}
            height={350}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
