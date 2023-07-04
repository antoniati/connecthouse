import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import SliderCoverFlow from "../../components/SliderCoverFlow";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

import "./styles.css";

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

    // Referências de cada seção da Página
    const heroSectionRef = useRef<HTMLDivElement>(null);
    const servicesSectionRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    const contactSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://connecthouse.vercel.app/static/data/landing.json");
            const data = await response.json();
      
            const { sectionsData } = data;
      
            setHeroTitle(sectionsData[0].title ?? "");
            setServicesTitle(sectionsData[1].title ?? "");
            setProjectsTitle(sectionsData[2].title ?? "");
            setAboutTitle(sectionsData[3].title ?? "");
            setContactTitle(sectionsData[4].title ?? "");
      
            setHeroDescription(sectionsData[0].description ?? "");
            setServicesDescription(sectionsData[1].description ?? "");
            setProjectsDescription(sectionsData[2].description ?? "");
            setAboutDescription(sectionsData[3].description ?? "");
            setContactDescription(sectionsData[4].description ?? "");
          } catch (error) {
            console.error("Error fetching landing data:", error);
          }
        };
      
        fetchData();
      }, []);
      

    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div id="landing">
            <Navbar />

            <SectionContainer id="hero-section" refElement={heroSectionRef}>
                <h1 className="hero-title">{heroTitle}</h1>
                <Description descriptionText={heroDescription} />
                <div className="hero-buttons">
                    <Button
                        text="Projetos"
                        textColor="#FFF"
                        fillColor="#FA9428"
                        borderColor="#FA9428"
                        hoverText="white"
                        hoverColor="#FAA64C"
                        clickFunction={() => scrollToSection(projectsSectionRef)}
                    />
                    <Button
                        text="Entre em Contato"
                        textColor="#FA9428"
                        fillColor="#141821"
                        borderColor="#FA9428"
                        hoverText="white"
                        hoverColor="#FAA64C"
                        clickFunction={() => scrollToSection(contactSectionRef)}
                    />
                </div>
            </SectionContainer>

            <SectionContainer id="services-section" refElement={servicesSectionRef}>
                <Title overlay={servicesTitle} text={servicesTitle} />
                <Description descriptionText={servicesDescription} />
                <Slider />
            </SectionContainer>

            <SectionContainer id="about-section" refElement={aboutSectionRef}>
                <div className="about-content">
                    <div className="about-content-left">
                        <img
                            className="internalwork-image"
                            src="https://connecthouse.vercel.app/static/images/services/internal-work.png"
                            alt="Pequeno Grande Homem"
                        />
                        <img
                            className="externalwork-image"
                            src="https://connecthouse.vercel.app/static/images/services/external-work.png"
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
                            <Link to="https://connecthouse.vercel.app/sobre">
                                <Button
                                    text="Saiba Mais"
                                    textColor="#FFF"
                                    fillColor="#FA9428"
                                    borderColor="#FA9428"
                                    hoverText="white"
                                    hoverColor="#FAA64C"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <SectionContainer id="projects-section" refElement={projectsSectionRef}>
                <Title overlay={projectsTitle} text={projectsTitle} />
                <Description descriptionText={projectsDescription} />
                <SliderCoverFlow />
            </SectionContainer>

            <SectionContainer id="contact-section" refElement={contactSectionRef}>
                <Title overlay={contactTitle} text={contactTitle} />
                <Description descriptionText={contactDescription} />
                <ContactForm />
            </SectionContainer>

            <Footer logo="https://connecthouse.vercel.app/logowhite.svg"/>
        </div>
    );
}

export default Landing;