import React from "react";
import styles from "../style";
//import { rec50, coprez1, coprez2 } from "../assets";
import { borderlines2, eventsnip, swirl, base } from "../assets";

function Contact() {
  return (
    <>
      <div className="w-full overflow-hidden bg-white z-20 ">
        <div
          className={`idk2 , ${styles.flexStart} z-20 py-7 grid grid-cols-1`}
        >
          <div className={`flex justify-start pl-40 ml-40`}>
            <h3
              className={`flex mr-20 ${styles.titleH3} leftborder redborder leading-10 `}
            >
              About Us
            </h3>
          </div>
        </div>
        {/* our club snip */}
        <div className={`grid grid-cols-2 grid-flow-col `}>
          <div className={`left pt-40 pl-36`}>
            <img src={borderlines2} alt="" />
          </div>
          <div
            className={`${styles.titleH3} leading-10 text-black pl-40 ml-40`}
          >
            Our club
            <div className={`${styles.titleLineBottom} p-1`}></div>
            <div className={``}>
              <p className={``}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et
                ratione doloribus omnis earum. Facere qui, ab ipsam tempora
                veniam, culpa ea ipsum accusantium eligendi repellat saepe
                soluta corporis ad dolor nulla molestias? Aperiam obcaecati
                exercitationem ullam quae modi perferendis soluta alias
                nesciunt! Unde hic voluptate facere dolorem placeat eaque <br />
                <br />
                accusantium consequatur provident quis. Magni veritatis ab nisi
                magnam cumque, corporis repellendus quod sint quasi officiis,
                quae officia repellat suscipit cum et dolorum reprehenderit
                dignissimos distinctio voluptatum fugit laborum sunt autem.
                Excepturi, cumque? Illum sequi dignissimos molestias unde
                consequatur aliquam neque nemo iusto, at eligendi, nam quas nisi
                dolorum placeat.
              </p>
            </div>
          </div>
          <img src={eventsnip} alt="" />
        </div>
      </div>
      {/* our staff 2023 snip */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`p-0 ${styles.boxWidth}`}>
          <div className={`flex-row w-full items-center `}>
          <h3 className={`${styles.titleH3}`}>2023 Staff</h3>
          <div className={`${styles.titleLineBottom} redborder`}>-</div>
        <p>
          <a href="" class="underline">
            see last year's staff here
          </a>
        </p>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          Co-presidents
          <div className={`grid grid-cols-3 gap-x-8`}>
            {/* <img src={base} alt="" />
            <img src={base} alt="" /> */}
            <div className="staff">

            </div>
            <div className="staff">
              
            </div>
          </div>
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          Executives
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          operations department
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          partnership department
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          marketing department
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          finance department
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        <div className={`${styles.titleH4}  `}>
          <br />
          <br />
          Human resources department
          <div className={`grid grid-cols-3 gap-8`}>
            <img src={base} alt="" />
            <img src={base} alt="" />
          </div>
          <br />
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
