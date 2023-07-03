import React from "react";

import "./styles.css";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contato: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="contato-page">
                <h1>Contato</h1>
            </SectionContainer>
            <Footer />
        </>
    );
}

export default Contato;