import React from "react";

import "./styles.css";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const About: React.FC = () => {
    return(
        <>
        <Navbar />
        <SectionContainer id="about-page">
            <h1>Hello World</h1>
        </SectionContainer>
        <Footer />
        </>
    );
}

export default About;