import React from "react";
import styles from "../style";
import { contactDarkrect, contactLongrect, line, slash } from "../assets";
import { contact } from "../constants";

function Contact() {
  return (
    <>
      <div className="w-full overflow-hidden bg-white z-20">
        <div className={`idk2 ${styles.flexStart} z-20 py-8`}>
          <div className={`p-0 ${styles.boxWidth} z-20`}>
            <h3
              className={`${styles.titleH3} leading-10 leftborder redborder text-black mx-8 ss:mx-24 z-20`}
            >
              Contact Us
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-white z-20">
        <div className={`mt-16 `}>
          <img src={line} alt="" className={`left mt-20 ml-[1000px] `} />
          <img src={slash} alt="" className={`left mt-16 ml-[800px] `} />
          <img src={contactDarkrect} alt="" className={`right mr-[800px]`} />
          <img
            src={contactLongrect}
            alt=""
            className={`right mt-[430px] mr-[800px]`}
          />
        </div>
      </div>

      <div className="w-full overflow-hidden bg-white z-20">
        <div className={` ml-[675px] flex-col `}>
          <p className={`font-bold`}>For general inquries please Contact </p>
          {/*Emails */}
          <p className="pt-3">Yorkesports@gmail.com</p>
          <p>esports@my.yorku.ca</p>
          <p className={`pt-10 font-bold`}>
            For specialized inquiries you can find us on Discord
          </p>
          <div>
            {contact.map((w, index) => (
              <div>
                <p className={` pt-4 text-red `}>
                  {w.name} | {w.pos}
                </p>
                <p>{w.disc}</p>
              </div>
            ))}
          </div>
          <div className={`pt-14 ${styles.paddingY}`}>
            <p className="font-bold">Club Room</p>
            <p>York University’s Second Student Centre </p>
            <p> 4700 Keele St #335, North York, ON M3J 1P3 </p>
            <p> Rm 316</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
