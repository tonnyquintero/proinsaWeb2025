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
          href="https://api.whatsapp.com/send?phone=573234257398"
          target="blank"
        >
          <BsWhatsapp size={55} />
        </a>{" "}
      </button>
    </div>
  );
};

export default Wbutton;
