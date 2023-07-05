import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactSection from "../../components/ContactSection";

import "./styles.css";

const Contato: React.FC = () => {
    return (
        <div id="contact-page">
            <Navbar />
            <div className="contact-page-texts">
                    <h1 className="contact-page-title">
                       ENTRE EM CONTATO
                    </h1>
                    <p className="contact-page-description">
                        <span>- </span>
                        Para inciarmos um projeto de sucesso juntos
                    </p>
                </div>
            <ContactSection />
            <Footer logo="https://connecthouse.vercel.app/logowhite.svg" />
        </div>
    );
}
export default Contato;
