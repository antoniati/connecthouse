import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";
import Description from "../../components/Description";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import "./styles.css";

const Contato: React.FC = () => {
  const [contactDescription, setContactDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://connecthouse.vercel.app/static/data/landing.json");
        const data = await response.json();
  
        setContactDescription(data.sectionsData[4].description ?? "");
      } catch (error) {
        console.error("Error fetching landing data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <Navbar />
      <SectionContainer id="contato-page">
        <Description descriptionText={contactDescription} />
        <ContactForm />
        <Footer logo="https://connecthouse.vercel.app/logodark.svg"/>
      </SectionContainer>
    </div>
  );
}

export default Contato;
