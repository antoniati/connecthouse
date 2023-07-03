import React from "react";

import "./styles.css";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Services: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="services-page">
                <h1>Services</h1>
            </SectionContainer>
            <Footer />
        </>
    );
}

export default Services;