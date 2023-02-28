import React from "react";
import Team from "../components/Team";
import styles from "../style";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="w-full overflow-hidden bg-red z-20">
        <div className={`idk ${styles.flexStart} z-20`}>
          <div className={`p-0 ${styles.boxWidth} z-20`}>
            <h3
              className={`${styles.titleH3} leading-10 leftborder blackborder text-white mx-8 ss:mx-24 z-20`}
            >
              Upcoming Events
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Header />
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white">
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Team />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
