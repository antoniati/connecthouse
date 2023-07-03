import React from "react";

import "./styles.css";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Project: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="project-page">
                <h1>Project</h1>
            </SectionContainer>
            <Footer />
        </>
    );
}

export default Project;