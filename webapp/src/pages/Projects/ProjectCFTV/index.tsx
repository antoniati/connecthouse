import React, { useEffect } from "react";

import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import SectionContainer from "../../../components/SectionContainer";

import "./styles.css";
import ContactButtons from "../../../components/ContactButtons";

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
                        <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-three.png" alt="" />
                    </div>

                    <div className="project-content-introdution_item">
                        <h2 className="project-content-introdution_title">
                            Instalação de Sistemas de CFTV
                        </h2>
                        <p className="project-content-introdution_description">
                            Nós, na <b>Connect House</b>, somos líderes em fornecer soluções de segurança de última geração para empresas e residências. Temos o prazer de apresentar um projeto recente em que realizamos a instalação de um sistema de CFTV para um cliente corporativo de renome. Neste caso de sucesso, fornecemos uma solução abrangente que atendeu às necessidades exclusivas do cliente, resultando em uma segurança aprimorada e tranquilidade.
                        </p>
                    </div>

                    <div className="project-content-details_item">
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Local :</h3>
                            <p className="project-content-details_description">Royal Plaza IN, Campinas-SP</p>
                        </div>
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Data :</h3>
                            <p className="project-content-details_description">01/04/2023</p>
                        </div>
                        <div className="project-content-details_texts">
                            <h3 className="project-content-details_title">Tempo de execução :</h3>
                            <p className="project-content-details_description">3 Meses</p>
                        </div>
                    </div>

                    <div className="project-content-analytics_item">
                        <div className="project-content-analytics_texts">
                            <h2 className="project-content-analytics_title"> Análise Estratégica</h2>
                            <p className="project-content-analytics_description">
                                Antes de iniciar a instalação do sistema de CFTV, nossa equipe de especialistas conduziu uma análise minuciosa das instalações do cliente.
                            </p>
                            <p className="project-content-analytics_description">
                                Com base nessa avaliação criteriosa, identificamos os pontos críticos que requeriam monitoramento constante e desenvolvemos uma estratégia personalizada para maximizar a segurança.
                            </p>
                        </div>
                        <div className="project-content-analytics_images">
                            <img
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-four.png"
                                alt="Imagem da preparação de cabos para instalação das camêras"
                            />
                            <img
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-six.png"
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
                                Nossa equipe projetou um sistema de CFTV sob medida, levando em consideração os requisitos específicos do cliente. Utilizando equipamentos de ponta e câmeras de alta resolução, montamos um conjunto de câmeras estrategicamente posicionadas em locais-chave, como entradas, corredores e áreas com alto fluxo de pessoas. Combinando câmeras fixas e PTZ, garantimos uma cobertura abrangente e flexível.
                            </p>
                        </div>
                        <div className="project-content-solutions_images">
                            <img
                                alt="Imagem dos produtos de segurança modernos que foram comprados"
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-five.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-one.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-two.png"
                            />

                            <img
                                alt="Imagem das camêras de monitoramento instaladas"
                                src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-three.png"
                            />
                        </div>
                    </div>

                    <div className="project-content-conclusion_item">
                        <h2 className="project-content-conclusion_title">
                            Integração de Tecnologia Avançada
                        </h2>
                        <p className="project-content-conclusion_description">
                            Além da instalação das câmeras, integramos o sistema a um servidor de armazenamento em nuvem. Isso permite ao cliente acessar facilmente as gravações e imagens em tempo real, mesmo quando estão fora das instalações. A integração de tecnologia avançada garante a conveniência e a segurança dos dados.
                        </p>
                        <h2 className="project-content-conclusion_title">
                            Instalação Profissional e Treinamento
                        </h2>
                        <p className="project-content-conclusion_description">
                            Nossa equipe altamente qualificada e experiente realizou a instalação com habilidade e precisão, minimizando o impacto nas operações diárias do cliente. Além disso, oferecemos um treinamento completo à equipe interna do cliente, capacitando-os a utilizar todos os recursos do sistema de forma eficaz.
                        </p>
                        <h2 className="project-content-conclusion_title">
                            Resultados e Benefícios
                        </h2>
                        <p className="project-content-conclusion_description">
                            O sistema de CFTV instalado oferece ao cliente uma visão abrangente de suas instalações, garantindo a prevenção de incidentes, monitoramento da segurança dos colaboradores e proteção de ativos valiosos. A solução personalizada proporciona tranquilidade e confiança ao cliente, tornando suas operações mais seguras e eficientes.
                        </p>
                        <p className="project-content-conclusion_description">
                            Investir em um sistema de CFTV de qualidade é uma decisão inteligente para proteger seus ativos e garantir a tranquilidade de sua empresa. Confie na experiência e na excelência da Connect House para fornecer soluções de segurança de classe mundial.
                        </p>
                    </div>

                    <ContactButtons />
                </div>
                <Footer logo="https://connecthouse.vercel.app/static/images/logo/logowhite.svg" />
            </SectionContainer>
        </>
    )
};
export default LightingProject;
