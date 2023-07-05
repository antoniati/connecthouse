import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";

import "./styles.css";

interface ServicesProps {
    title: string;
    description: string;
}

interface ServicessData {
    services: ServicesProps[];
}

const Services: React.FC = () => {
    const [servicessData, setServicessData] = useState<ServicessData>({
        services: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://connecthouse.vercel.app/static/data/services.json");
                const data = await response.json();

                setServicessData(data);
            } catch (error) {
                console.error("Error fetching projects data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Navbar />
            <SectionContainer id="services-page">
                <h1>Soluções Tecnologicas e Personalizadas</h1>
                <p>
                    {/* Descrição utilizando técnicas de SEO, marketing e persuasão  */}
                </p>
                {servicessData.services.map((services, index) => {
                    return (
                        <div className="services-page-card" key={index}>
                            <div className="services-page-card_images">
                                <img src="https://connecthouse.vercel.app/static/images/background.jpg" />
                            </div>
                            <div className="services-page-card_texts">
                                <h2 className="services-page-card_title">
                                    {services.title}
                                </h2>
                                <p>
                                    {/* Descrição utilizando técnicas de SEO, marketing e persuasão  */}
                                </p>
                                <p>
                                    {services.description}
                                </p>
                            </div>
                        </div>

                    )
                })}

                <Footer logo="https://connecthouse.vercel.app/logowhite.svg" />
            </SectionContainer>
        </>
    );
}

export default Services;