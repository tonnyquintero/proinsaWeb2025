import React from "react";
import Image from "next/image";
import Canales from "../assets/chanels.png";

import styles from "../styles/blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blog} id="blog">
      <Image src={Canales} alt="canales" />
    </div>
  );
};

export default Blog;
