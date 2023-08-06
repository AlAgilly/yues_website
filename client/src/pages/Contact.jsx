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
    </>
  );
}

export default Contact;