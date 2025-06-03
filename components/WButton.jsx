import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import boton from "../assets/botonW.png";
import styles from "../styles/wButton.module.css";

const Wbutton = () => {
  return (
    <div className={styles["boton"]}>
      <div className={styles["divMessage"]}>
        <p>
          ¿Dudas? <br /> Habla con nosotros
        </p>
      </div>
      <button className={styles["button"]}>
        <a
          href="https://api.whatsapp.com/send?phone=16174620659&text=Hello%20SBS%20Salazar%20Brothers,%20I%20would%20like%20to%20request%20more%20information%20about%20your%20services."
          target="blank"
        >
          <BsWhatsapp size={55} />
        </a>{" "}
      </button>
    </div>
  );
};

export default Wbutton;
