"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/services.module.css";
import blanqueamiento from "../assets/Blanqueamiento.png";
import cirugia from "../assets/cirugia.png";
import endodoncia from "../assets/endodoncia2.png";
import odontologia from "../assets/odontologia.png";
import odontopediatria from "../assets/odontopediatria2.png";
import ortodoncia from "../assets/ortodoncia.png";
import periodoncia from "../assets/periodoncia.png";
import protesis from "../assets/protesis.png";
// import img1 from '../public/img1.png';

const Services = () => {
  const boxRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const box = boxRef.current;

    console.log("Prev:", prev);
    console.log("Next:", next);
    console.log("Box:", box);

    // Función para mover el primer item al final
    const handleNextClick = () => {
      const items = box.querySelectorAll("." + styles.item);
      if (items.length > 0) {
        box.appendChild(items[0]);
      }
      console.log("Next button clicked");
    };

    // Función para mover el último item al inicio
    const handlePrevClick = () => {
      const items = box.querySelectorAll("." + styles.item);
      if (items.length > 0) {
        box.prepend(items[items.length - 1]);
      }
      console.log("Prev button clicked");
    };

    // Agregar event listeners
    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <section id="portfolio">
      <h3 className={styles.subtitle}>Conoce nuestros servicios</h3>
      <div className={styles.recomends}>
        <div ref={boxRef} className={styles.box}>
          <div className={styles.item}>
            <Image
              alt="blanqueamiento"
              width={250}
              height={250}
              src={blanqueamiento}
            />
          </div>
          <div className={styles.item}>
            <Image alt="cirugia" width={250} height={250} src={cirugia} />
          </div>
          <div className={styles.item}>
            <Image alt="ortodoncia" width={250} height={250} src={ortodoncia} />
          </div>
          <div className={styles.item}>
            <Image
              alt="endodoncia"
              width={250}
              height={250}
              src={periodoncia}
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="periodoncia"
              width={250}
              height={250}
              src={endodoncia}
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="odontologia"
              width={250}
              height={250}
              src={odontologia}
            />
          </div>
          <div className={styles.item}>
            <Image
              alt="odontopediatria"
              width={250}
              height={250}
              src={odontopediatria}
            />
          </div>
          <div className={styles.item}>
            <Image alt="protesis" width={250} height={250} src={protesis} />
          </div>
        </div>

        <div className={styles.buttons}>
          <span ref={prevRef} className={styles.prev}></span>
          <span ref={nextRef} className={styles.next}></span>
        </div>
      </div>
    </section>
  );
};

export default Services;
