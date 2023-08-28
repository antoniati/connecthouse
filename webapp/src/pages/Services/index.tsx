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
                <h1>Estamoas atualizando esta página</h1>
                <p>Entre em contato para mais informações</p>
                <Footer logo="https://connecthouse.vercel.app/logowhite.svg" />
            </SectionContainer>
        </>
    );
}

export default Services;