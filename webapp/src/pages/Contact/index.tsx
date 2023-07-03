import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";
import Description from "../../components/Description";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";

import landingData from "../../static/data/landing-data.json";

import "./styles.css";

const Contato: React.FC = () => {
    const [contactDescription, setContactDescription] = useState("");

    useEffect(() => {
        setContactDescription(landingData.sectionsData[4].description ?? "");
    }, []);

    return (
        <div className="page-container">
            <Navbar />
            <SectionContainer id="contato-page">
                <Description descriptionText={contactDescription} />
                <ContactForm />
            <Footer />
            </SectionContainer>
        </div>
    );
}

export default Contato;