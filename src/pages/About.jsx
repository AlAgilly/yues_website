import React from "react";
import styles from "../style";
import { borderlines2, rec50 } from "../assets";
import { coprezpanel } from "../constants";

function Contact() {
  return (
    <>
      <div className="w-full overflow-hidden bg-white z-20 ">
        <div className={`idk2 ${styles.flexStart} `}>
          <div className={`p-0 max-w-[1340px] w-full py-10`}>
            <div
              className={` flex-1 mm:${styles.flexEnd} flex-col mx-8 xs:mx-20 ss:mx-24`}
            >
              <div className="flex flex-col justify-between items-left w-full">
                <h3
                  className={`${styles.titleH3} leading-10 leftborder redborder text-black`}
                >
                  About Us
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* our club snip */}

        <div className="w-full overflow-hidden bg-white z-20 ">
          <div className={`grid grid-row-2 grid-flow-row `}>
            <div className={`left pt-40 pl-96`}>
              <img src={borderlines2} alt="" />
            </div>
            <div className={`right pt-[30px] pr-[620px]`}>
              <img src={rec50} alt="" className={``} />
            </div>

            <div className={`${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <div
                  className={`${styles.titleH3} leading-10 text-black -ml-[20px]`}
                >
                  Our club
                  <div className={`${styles.titleLineBottom} pt-2`}></div>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  et ratione doloribus omnis earum. Facere qui, ab ipsam tempora
                  veniam, culpa ea ipsum accusantium eligendi repellat saepe
                  soluta corporis ad dolor nulla molestias? Aperiam obcaecati
                  exercitationem ullam quae modi perferendis soluta alias
                  nesciunt! Unde hic voluptate facere dolorem placeat eaque{" "}
                  <br />
                  <br />
                  accusantium consequatur provident quis. Magni veritatis ab
                  nisi magnam cumque, corporis repellendus quod sint quasi
                  officiis, quae officia repellat suscipit cum et dolorum
                  reprehenderit dignissimos distinctio voluptatum fugit laborum
                  sunt autem. Excepturi, cumque? Illum sequi dignissimos
                  molestias unde consequatur aliquam neque nemo iusto, at
                  eligendi, nam quas nisi dolorum placeat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our staff 2023 snip */}

      <div className="w-full overflow-hidden bg-white z-20 ">
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={` `}>
              <div
                className={`${styles.titleH3} leading-10 text-black -ml-[20px]`}
              >
                2023 staff
                <div className={`${styles.titleLineBottom} pt-2`}></div>
              </div>
              <p>
                <a href="" class="underline">
                  see last year's staff here
                </a>
              </p>
              {/* panel format */}
              <div className={`${styles.titleH4}  `}>
                <br />
                co-presidents
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
              {/* panel format */}{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Executives
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Operations Department
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Parternerships Department
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Marketing department
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Finance Department
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className={`${styles.titleH4}  `}>
                <br />
                Human resources department
                <div className={`grid grid-cols-3 gap-36 pb-10`}>
                  {coprezpanel.map((stf, index) => (
                    <div className={`staff pl-12 pt-14`}>
                      <p className={``}>{stf.pos}</p>
                      <h1 className={` text-red `}>{stf.name}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
