import React from "react";
import styles from "../style";
import { Button } from "../components";
import { aboutsnip } from "../assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/elements/Header";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
        {/* Title */}
        <Header title="Contact" />
        <div className={`max-w-[1340px] m-auto px-12 xs:px-24 py-8`}>
          <div className={`w-full mm:w-2/3 pb-[40px]`}>
            <h6 className={`font-bevietnamRegular font-bold py-2 text-lg`}>
              For general inquiries please contact:
            </h6>
            <p>
              yorkesports@gmail.com
            </p>
            <p>
              esports@my.yorku.ca
            </p>
          </div>
          <div className="w-full mm:w-2/3">
            <h6 className="font-bevietnam font-bold pb-2">
              For specialized inquiries you can find us on Discord
            </h6>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Sarah Miller | Co-President</p>
            <p className="pb-2">ParallelNymph#2742</p>
            <p className="text-red">Ismaeel Jafar Abdus-Samad | Vice-President of Operations</p>
            <p className="pb-2">TheSmiley03#2025</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
            <p className="text-red">Alexander Saiko | Co-President</p>
            <p className="pb-2">Lovesaik#1622</p>
          </div>
          <div className="w-full mm:w-2/3 py-8">
            <h6 className="font-bevietnam font-bold">Club Room</h6>
            <p>York University’s Second Student Centre<br/>4700 Keele St #335, North York, ON M3J 1P3</p>
            <p>Room 316</p>
          </div>
        </div>
    </>
  );
}

export default Contact;