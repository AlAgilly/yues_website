import React from "react";
import styles from "../style";
import { Button } from "../components";
import { aboutsnip } from "../assets";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";

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
        <div className={`max-w-[1340px] m-auto ${styles.paddingX} ${styles.paddingY}`}>
          <div>
            <h6>
              For general inquiries please contact:
            </h6>
            <p>
              yorkesports@gmail.com
            </p>
            <p>
              esports@my.yorku.ca
            </p>
          </div>
          <div>
            <h6>
              For specialized inquiries you can find us on Discord
            </h6>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
            <p>Lovesaik#1622</p>
            <p>Alexander Saiko | Co-President</p>
          </div>
        </div>
    </>
  );
}

export default Contact;