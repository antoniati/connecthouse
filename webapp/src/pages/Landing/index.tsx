import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import landingData from "../../static/data/landing-data.json";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

import internalWorkImage from "../../assets/internal-work.png";
import externalWorkImage from "../../assets/external-work.png";


import "./styles.css";
import Description from "../../components/Description";
import SectionContainer from "../../components/SectionContainer";
import SliderCoverFlow from "../../components/SliderCoverFlow";
import ContactForm from "../../components/ContactForm";

const Landing: React.FC = () => {
    // Estado Inicial dos Títulos da página Landing
    const [heroTitle, setHeroTitle] = useState("");
    const [servicesTitle, setServicesTitle] = useState("");
    const [aboutTitle, setAboutTitle] = useState("");
    const [projectsTitle, setProjectsTitle] = useState("");
    const [contactTitle, setContactTitle] = useState("");

    
    // Estado Inicial das Descrições da página Landing
    const [heroDescription, setHeroDescription] = useState("");
    const [servicesDescription, setServicesDescription] = useState("");
    const [aboutDescription, setAboutDescription] = useState("");
    const [projectsDescription, setProjectsDescription] = useState("");
    const [contactDescription, setContactDescription] = useState("");

    useEffect(() => {
        // 
        const {sectionsData} = landingData;

        // Atualiza Títulos da página Landing
        setHeroTitle(sectionsData[0].title ?? "");
        setServicesTitle(sectionsData[1].title ?? "");
        setProjectsTitle(sectionsData[2].title ?? "");
        setAboutTitle(sectionsData[3].title ?? "");
        setContactTitle(sectionsData[4].title ?? "");

        // Atualiza Descrições da página Landing
        setHeroDescription(sectionsData[0].description ?? "");
        setServicesDescription(sectionsData[1].description ?? "");
        setProjectsDescription(sectionsData[2].description ?? "");
        setAboutDescription(sectionsData[3].description ?? "");
        setContactDescription(sectionsData[4].description ?? "");
    }, []);

    return (
        <div id="landing">
            <Navbar />

            <SectionContainer id="hero-section">
                <div className="hero-texts">
                    <h1 className="hero-title"> 
                        {heroTitle} 
                    </h1>
                    <Description descriptionText={heroDescription}/>
                </div>

                <div className="hero-buttons">
                    <Link to="/about">
                        <Button 
                            text="Saiba Mais" 
                            textColor="#FFF" 
                            fillColor="#FA9428" 
                            hoverColor="#FAA64C" 
                            hoverText="white" 
                            borderColor="#FA9428" 
                        />
                    </Link>
                    <Link to="#contact">
                        <Button 
                            text="Entre em Contato"
                             textColor="#FA9428" 
                             fillColor="#141821" 
                             hoverColor="#FAA64C" 
                             hoverText="white" 
                             borderColor="#FA9428" 
                        />
                    </Link>
                </div>
            </SectionContainer>

            <SectionContainer id="services-section">
                <Title overlay={servicesTitle} text={servicesTitle} />
                <Description descriptionText={servicesDescription}/>
                <Slider />
            </SectionContainer>

            <SectionContainer id="about-section">
                <div className="about-content">
                    <div className="about-content-left">
                        <img 
                            className="internalwork-image" 
                            src={internalWorkImage} 
                            alt="Pequeno Grande Homem" 
                        />
                        <img 
                            className="externalwork-image" 
                            src={externalWorkImage} 
                            alt="Pequeno Grande Homem" 
                        />
                    </div>

                    <div className="about-content-right">
                        <Title overlay={aboutTitle} text={aboutTitle} />
                        <h2 className="about-subtitle">
                            Conecte-se ao futuro com a {heroTitle}
                        </h2>
                        <p className="about-description">
                            {aboutDescription}
                        </p>
                        
                        <div className="about-buttons">
                            <Link to="http://localhost:5173/about">
                                <Button 
                                    text="Saiba Mais" 
                                    textColor="white" 
                                    fillColor="#FA9428" 
                                    hoverColor="#FAA64C" 
                                    hoverText="white" 
                                    borderColor="#FA9428" 
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            
            <SectionContainer id="projects-section">
                <Title overlay={projectsTitle} text={projectsTitle}/>
                 <Description descriptionText={projectsDescription}/>
            <SliderCoverFlow />
            </SectionContainer>

            <SectionContainer id="contact-section">
                <Title overlay={contactTitle} text={contactTitle}/>
                <Description descriptionText={contactDescription} />
                <ContactForm />
            </SectionContainer>
        </div>
    );
}

export default Landing;