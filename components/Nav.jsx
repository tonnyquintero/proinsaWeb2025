import React from "react";

import styles from "../styles/nav.module.css";

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
          href="https://maps.app.goo.gl/jJZFmDVrgnyTt9ZdA"
          className={styles.card}
          target="blank"
        >
          <h2>
            Location<span>-&gt;</span>
          </h2>
          <p>Finding us quickly is easier than you think</p>
        </a>

        <a href="#portfolio" className={styles.card}>
          <h2>
            Services <span>-&gt;</span>
          </h2>
          <p>
            Get to know our extensive catalog of services and choose the one you
            prefer.
          </p>
        </a>

        <a href="#testimonials" className={styles.card}>
          <h2>
            Testimonials <span>-&gt;</span>
          </h2>
          <p>This is the review of people who have taken our services</p>
        </a>

        <a href="#contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            We are attentive to whatever you need, do not hesitate to contact
            us.
          </p>
        </a>
      </div>
    </>
  );
};

export default Nav;
