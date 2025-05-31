"use client";

import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ksurb6o",
        "template_0q1n6da",
        form.current,
        "Wl-IzJ1QuHrMQ0XAc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className={styles["h5"]}>Contáctanos</h5>
      <h2>Estamos a un paso de ti</h2>

      <div className="container">
        <div className={styles.containor}>
          <div className={styles["contact_options"]}></div>
          {/* <form className={styles['form']} ref={form} onSubmit={sendEmail} >
            <input className={styles.input} type="text" name="name" placeholder={t("contact.name")} required />
            <input className={styles.input} type="email" name='email' placeholder={t("contact.email")} required />
            <textarea className={styles.textarea} name="message" placeholder={t("contact.message")} rows="7" required></textarea>
            <button type='submit' className='btn'>{t("contact.send")}</button>
          </form> */}

          <div className={styles.box2}>
            <form ref={form} onSubmit={sendEmail} className={styles.form2}>
              <h2>Envíanos tu mensaje</h2>
              <div className={styles.inputBox}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre y Apellido"
                  required="required"
                />
                <i></i>
              </div>
              <div className={styles.inputBox}>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  required="required"
                />
                <i></i>
              </div>
              <textarea
                className={styles.inputBox}
                name="message"
                placeholder="Necesidad del Usuario"
                rows="7"
                required
              ></textarea>
              <button type="submit" className={styles.btnPrimary1}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
