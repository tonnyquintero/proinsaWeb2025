import React from "react";

import styles from "../styles/nav.module.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { FaBookMedical } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiListView } from "react-icons/ri";

import Image from "next/image";
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <>
      <div className={styles["headerNav"]}>
        <Image
          className={styles["sonrisa1"]}
          src={Logo}
          width={384}
          height={165}
          alt="logo"
        />
      </div>
      <div className={styles.grid}>
        <a
          href="https://www.google.com/maps/place/6%C2%B017'17.6%22N+75%C2%B033'45.6%22W/@6.2882261,-75.5652504,17z/data=!3m1!4b1!4m4!3m3!8m2!3d6.2882261!4d-75.5626755?hl=es&entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
          className={styles.card}
          target="blank"
        >
          <h2 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            UBICACIÓN
            <RiArrowDownDoubleFill />
          </h2>
        </a>

        <a href="#portfolio" className={styles.card}>
          <h2 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            SERVICIOS
            <RiArrowDownDoubleFill />
          </h2>
        </a>

        <a href="#blog" className={styles.card}>
          <h2 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            CANALES
            <RiArrowDownDoubleFill />
          </h2>
        </a>

        <a href="#contact" className={styles.card}>
          <h2 style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            CONTACTO
            <RiArrowDownDoubleFill />
          </h2>
        </a>
      </div>
    </>
  );
};

export default Nav;
