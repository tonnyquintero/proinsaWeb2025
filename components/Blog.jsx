import React from "react";
import Image from "next/image";
import Canales from "../assets/chanels.png";
import Cartelera from "../assets/cartelera.png";

import styles from "../styles/blog.module.css";

const Blog = () => {
  return (
    <>
      <div className={styles.blog} id="blog">
        <Image src={Canales} alt="canales" />
      </div>
      <h1 className={styles.titulo}>Cartelera Informativa</h1>
      <div className={styles.blog2} id="cartelera">
        <Image src={Cartelera} alt="cartelera" />
      </div>
    </>
  );
};

export default Blog;
