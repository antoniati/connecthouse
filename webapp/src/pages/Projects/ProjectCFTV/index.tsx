import React from "react";

import Navbar from "../../../components/Navbar";
import SectionContainer from "../../../components/SectionContainer";

import "./styles.css";
import Button from "../../../components/Button";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";

const ProjectCFTV: React.FC = () => {
    return (
        <>
            <div id="#top-page"></div>
            <SectionContainer id="project-container">
            <Navbar />
                <div className="project-item">
                    <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-three.png" alt="" />
                    <div className="text-intro-project">
                        <h2 className="subtitle-project-item">
                            Instalação de Sistemas de CFTV
                        </h2>
                        <p className="description-project-item">
                            Nós, na <b>Connect House</b>, somos líderes em fornecer soluções de segurança de última geração para empresas e residências. Temos o prazer de apresentar um projeto recente em que realizamos a instalação de um sistema de CFTV para um cliente corporativo de renome. Neste caso de sucesso, fornecemos uma solução abrangente que atendeu às necessidades exclusivas do cliente, resultando em uma segurança aprimorada e tranquilidade.
                        </p>
                    </div>
                    <div className="info-project">
                        <div className="info-project-item">
                            <h3 className="info-project-title">Local :</h3>
                            <p className="info-project-description">Royal Plaza IN, Campinas-SP</p>
                        </div>
                        <div className="info-project-item">
                            <h3 className="info-project-title">Data :</h3>
                            <p className="info-project-description">01/04/2023</p>
                        </div>
                        <div className="info-project-item">
                            <h3 className="info-project-title">Tempo de execução :</h3>
                            <p className="info-project-description">3 Meses</p>
                        </div>
                    </div>

                    <div className="texts-details-project">
                        <div className="details-strategy">
                            <div className="details-strategy-texts">
                            <h2> Análise Estratégica</h2>
                            <p>
                                Antes de iniciar a instalação do sistema de CFTV, nossa equipe de especialistas conduziu uma análise minuciosa das instalações do cliente. 
                            </p>
                                <p>
                                Com base nessa avaliação criteriosa, identificamos os pontos críticos que requeriam monitoramento constante e desenvolvemos uma estratégia personalizada para maximizar a segurança.
                                
                                </p>
                            </div>
                            <div className="details-strategy-images">
                                <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-four.png" alt="" />
                                <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-six.png" alt="" />
                            </div>
                        </div>
                        <div className="details-solution">
                            <div className="details-solution-texts">
                                <h2>Solução Personalizada</h2>
                                <p>
                                    Nossa equipe projetou um sistema de CFTV sob medida, levando em consideração os requisitos específicos do cliente. Utilizando equipamentos de ponta e câmeras de alta resolução, montamos um conjunto de câmeras estrategicamente posicionadas em locais-chave, como entradas, corredores e áreas com alto fluxo de pessoas. Combinando câmeras fixas e PTZ, garantimos uma cobertura abrangente e flexível.
                                </p>
                            </div>
                            <div className="details-solution-images">
                                <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-five.png" alt="" />
                                 <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-one.png" alt="" />
                                <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-two.png" alt="" />
                                <img src="https://connecthouse.vercel.app/static/images/services/cftv/cftv-image-three.png" alt="" />
                            </div>
                        </div>

                        <h2>
                            Integração de Tecnologia Avançada
                        </h2>
                        <p>
                            Além da instalação das câmeras, integramos o sistema a um servidor de armazenamento em nuvem. Isso permite ao cliente acessar facilmente as gravações e imagens em tempo real, mesmo quando estão fora das instalações. A integração de tecnologia avançada garante a conveniência e a segurança dos dados.
                        </p>

                        <h2>
                            Instalação Profissional e Treinamento
                        </h2>
                        <p>
                            Nossa equipe altamente qualificada e experiente realizou a instalação com habilidade e precisão, minimizando o impacto nas operações diárias do cliente. Além disso, oferecemos um treinamento completo à equipe interna do cliente, capacitando-os a utilizar todos os recursos do sistema de forma eficaz.
                        </p>

                        <h2>
                            Resultados e Benefícios
                        </h2>
                        <p>
                            O sistema de CFTV instalado oferece ao cliente uma visão abrangente de suas instalações, garantindo a prevenção de incidentes, monitoramento da segurança dos colaboradores e proteção de ativos valiosos. A solução personalizada proporciona tranquilidade e confiança ao cliente, tornando suas operações mais seguras e eficientes.
                        </p>

                        <p>
                            Investir em um sistema de CFTV de qualidade é uma decisão inteligente para proteger seus ativos e garantir a tranquilidade de sua empresa. Confie na experiência e na excelência da [Nome da Empresa] para fornecer soluções de segurança de classe mundial.

                        </p>

                        <h2>
                            Contate-nos
                        </h2>
                        <p>
                            Se você está procurando uma instalação profissional de sistemas de CFTV que atenda às suas necessidades específicas, entre em contato conosco hoje mesmo. Nossa equipe especializada está pronta para discutir suas demandas e fornecer a melhor solução de segurança para o seu negócio.
                        </p>
                    </div>
                </div>
                <div className="btn-project-info">
                    <Link to="https://connecthouse.vercel.app/contato">
                        <Button
                            text="Entre em Contato"
                            textColor="#FA9428"
                            fillColor="#141821"
                            borderColor="#FA9428"
                            hoverText="white"
                            hoverColor="#FAA64C"
                        />

                    </Link>
                    <Link to="https://wa.me/5519989288560" target="_blank">
                        <Button
                            text="Whatsapp"
                            textColor="#FFF"
                            fillColor="#25D366"
                            hoverColor="#52E086"
                            hoverText="white"
                            borderColor="#25D366"
                        />
                    </Link>
                    <Link to="https://t.me/palmeiras" target="_blank">
                        <Button
                            text="Telegram"
                            textColor="#FFF"
                            fillColor="#00BBCC"
                            hoverColor="#00CEE0"
                            hoverText="white"
                            borderColor="#00BBCC"
                        />
                    </Link>
                </div>
                <Footer logo="https://connecthouse.vercel.app/logodark.svg" />
            </SectionContainer>
        </>
    );
}

export default ProjectCFTV;