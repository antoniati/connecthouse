import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

import landingData from "../../static/data/landing-data.json";

import litleBigMan from "../../assets/litle-big-man.png";
import imageCable from "../../assets/cable.png";

import "./styles.css";

const Landig: React.FC = () => {

    const [heroTitle, setHeroTitle] = useState("");
    const [heroDescription, setHeroDescription] = useState("");

    useEffect(() => {
        const { sections } = landingData;
        const { title: heroTitleData, description: heroDescriptionData } = sections[0];


        setHeroTitle(heroTitleData);
        setHeroDescription(heroDescriptionData);
    }, []);

    return (
        <>
            <Navbar />

            <section id="hero">
                <div className="hero-texts">
                    <h1 className="hero-title"> {heroTitle} </h1>
                    <p className="hero-description"> {heroDescription} </p>
                </div>
                <div className="hero-buttons">
                    <Link to="http://localhost:5173/about">
                        <Button text="Saiba Mais" textColor="#FFF" fillColor="#FA9428" hoverColor="#FAA64C" hoverText="white" borderColor="#FA9428" />
                    </Link>
                    <Link to="#contact">
                        <Button text="Entre em Contato" textColor="#FA9428" fillColor="#141821" hoverColor="#FAA64C" hoverText="white" borderColor="#FA9428" />
                    </Link>
                </div>
            </section>

            <section id="services">
                <Title overlay="Serviços" text="Serviços" />
                <p className="services-description">Aproveite o melhor da tecnologia moderna com nossas soluções personalisadas e confiáveis</p>
                <Slider />
            </section>

            <section id="about">
                <div className="about-content">
                    <div className="about-content-left">
                        <img src={litleBigMan} alt="Pequeno Grande Homem" className="image-man" />
                        <img src={imageCable} alt="Pequeno Grande Homem" className="image-cable" />
                    </div>
                    <div className="about-content-right">
                        <Title overlay="Sobre" text="Sobre" />
                        <p className="about-description first-description">Conecte-se ao futuro com a Connect House</p>
                        <p className="about-description">Imagine ter total controle sobre a sua residência ou prédio, tudo ao alcance de suas mãos. Nossa equipe altamente qualificada e dedicada trabalha incansavelmente para criar soluções personalizadas que se adequem perfeitamente ao seu estilo de vida e às suas demandas de segurança.</p>
                        <div className="about-buttons">
                            <Link to="http://localhost:5173/about">
                                <Button text="Saiba Mais" textColor="white" fillColor="#FA9428" hoverColor="#FAA64C" hoverText="white" borderColor="#FA9428" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Landig;