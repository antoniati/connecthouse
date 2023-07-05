import React, { useEffect } from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SectionContainer from "../../../components/SectionContainer";
import ContactButtons from "../../../components/ContactButtons";

import "./styles.css";

const LightingProject: React.FC = () => {
    const imageOpen = (image: HTMLImageElement) => {
        image.classList.toggle("modal-open");
    };

    useEffect(() => {
        const images = document.querySelectorAll(".project-content-solutions_images img");

        images.forEach((image) => {
            const htmlImage = image as HTMLImageElement;
            image.addEventListener("click", () => {
                imageOpen(htmlImage);
            });
        });
    }, []);


    return (
        <>
            <Navbar />
            <SectionContainer id="project-page">
                <div className="project-content">
                    <div className="project-content-image_top">
                        <img src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-six.png" alt="" />
                    </div>

                    <div className="project-content-introdution_item">
                        <h2 className="project-content-introdution_title">
                            Instalação Elétrica & Iluminação
                        </h2>
                        <p className="project-content-introdution_description">
                            Realizamos recentemente um projeto de instalação elétrica e iluminação no Enterprise Station, em Campinas-SP. Com a nossa expertise e comprometimento, entregamos um serviço de qualidade que transformou completamente o ambiente. Durante a execução do projeto, utilizamos as mais avançadas técnicas e materiais de ponta para garantir uma instalação elétrica segura e eficiente.
                        </p>
                    </div>

                    <div className="project-content-details_item">
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Local :</h3>
                            <p className="project-content-details_description">Enterprise Station, Campinas-SP</p>
                        </div>
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Data :</h3>
                            <p className="project-content-details_description">05/07/2023</p>
                        </div>
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Tempo de execução :</h3>
                            <p className="project-content-details_description">4 Meses</p>
                        </div>
                    </div>

                    <div className="project-content-analytics_item">
                        <div className="project-content-analytics_texts">
                            <h2 className="project-content-analytics_title"> Análise Estratégica</h2>
                            <p className="project-content-analytics_description">
                                Durante a análise estratégica, identificamos as melhores soluções de iluminação para cada espaço. Utilizamos técnicas de iluminação focal e geral para criar um ambiente equilibrado e aconchegante. Além disso, incorporamos tecnologias avançadas, como sensores de presença e controle de iluminação automatizado, para otimizar o consumo de energia.
                            </p>
                        </div>
                        <div className="project-content-analytics_images">
                            <img
                                src="https://connecthouse.vercel.app/static/images/services/external-work.png"
                                alt="Imagem da preparação de cabos para instalação das camêras"
                            />
                            <img
                                src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-image-six.png"
                                alt="Imagem da escada posisionada para instalão da caixa suspensa do servidor das camêras"
                            />
                        </div>
                    </div>

                    <div className="project-content-solutions_item">
                        <div className="project-content-solutions_texts">
                            <h2 className="project-content-solutions_title">
                                Solução Personalizada
                            </h2>
                            <p className="project-content-solutions_description">
                                Nossa solução personalizada de iluminação foi cuidadosamente projetada para atender às demandas e expectativas do cliente. Selecionamos luminárias modernas e elegantes que complementam o design do ambiente, criando uma atmosfera sofisticada.
                            </p>

                            <p className="project-content-solutions_description">
                                Utilizamos luminárias com diferentes intensidades de luz e tonalidades para criar diferentes cenários e realçar os pontos-chave do espaço. Além disso, aplicamos técnicas de iluminação arquitetural para destacar elementos específicos da decoração e criar um ambiente visualmente atraente.
                            </p>
                        </div>
                        <div className="project-content-solutions_images">
                            <img
                                alt="Imagem dos produtos de segurança modernos que foram comprados"
                                src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-image-one.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-image-two.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-image-three.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/ilum/ilum-image-four.png"
                            />
                        </div>
                    </div>

                    <div className="project-content-conclusion_item">
                        <h2 className="project-content-conclusion_title">
                            Luminárias
                        </h2>
                        <p className="project-content-conclusion_description">
                            Nossas luminárias são escolhidas levando em consideração o estilo do local e as preferências do cliente. Desde lustres imponentes até spots de teto discretos, selecionamos as luminárias ideais para cada espaço, garantindo uma iluminação harmoniosa e agradável.
                        </p>
                        <h2 className="project-content-conclusion_title">
                            Som Ambiente
                        </h2>
                        <p className="project-content-conclusion_description">
                            Utilizamos equipamentos de áudio de alta qualidade para garantir uma reprodução de som cristalina. O sistema de som ambiente oferece a possibilidade de selecionar músicas de diferentes gêneros e ajustar o volume de acordo com a preferência de cada ambiente.
                        </p>
                        <h2 className="project-content-conclusion_title">
                            Automação e instalação de TVs
                        </h2>
                        <p className="project-content-conclusion_description">
                            No projeto, também incluímos automação residencial e a instalação de TVs. Através da automação, o cliente pode controlar a iluminação, o som ambiente e outros dispositivos eletrônicos de forma prática e intuitiva.
                        </p>
                        <p className="project-content-conclusion_description">

                            Além disso, realizamos a instalação de TVs em pontos estratégicos do ambiente, proporcionando uma experiência visual imersiva. Combinamos a funcionalidade da automação com a qualidade das TVs para oferecer um ambiente completo e moderno.
                        </p>
                    </div>

                    <div className="project-content-contact-us_item">
                        <h2 className="project-content-contact-us_title">
                            Contate-nos
                        </h2>
                        <p className="project-content-contact-us_description">
                            Se você deseja transformar seu espaço com um projeto de instalação elétrica e iluminação personalizado, entre em contato conosco. Nossa equipe de especialistas terá o prazer de ajudá-lo a criar um ambiente funcional, seguro e visualmente deslumbrante.
                        </p>

                        <p className="project-content-contact-us_description">
                            Aproveite para agendar uma consulta gratuita e descubra como nossos serviços podem agregar valor ao seu ambiente. Estamos disponíveis no WhatsApp e Telegram para atender suas dúvidas e oferecer soluções personalizadas.
                        </p>

                       <ContactButtons />
                    </div>
                </div>
                <Footer logo="https://connecthouse.vercel.app/static/images/logo/logowhite.svg" />
            </SectionContainer>
        </>
    )
};
export default LightingProject;
