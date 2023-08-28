import React from "react";
import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";

import "./styles.css";

const Services: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="services-page">
                <h1>Estamoas atualizando esta página</h1>
                <p>Entre em contato para mais informações</p>
                <Footer logo="https://connecthouse.vercel.app/logowhite.svg" />
            </SectionContainer>
        </>
    );
}

export default Services;