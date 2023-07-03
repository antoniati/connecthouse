import React from "react";

import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";

import "./styles.css";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const ProjectCFTV: React.FC = () => {
    return (
        <>
            <Navbar />
            <div id="#top-page"></div>
            <SectionContainer id="project-container">
                <div className="project-item">
                    <div className="slider-project-item">
                        <img src="https://connecthouse.vercel.app/images/image-eight.png" alt="" />
                    </div>
                    <div className="text-intro-item">
                        <h2 className="subtitle-project-item">
                            Instalação de Sistemas de CFTV
                        </h2>
                        <p className="description-project-item">
                            Nós, na <b>Connect House</b>, somos líderes em fornecer soluções de segurança de última geração para empresas e residências. Temos o prazer de apresentar um projeto recente em que realizamos a instalação de um sistema de CFTV para um cliente corporativo de renome. Neste caso de sucesso, fornecemos uma solução abrangente que atendeu às necessidades exclusivas do cliente, resultando em uma segurança aprimorada e tranquilidade.
                        </p>
                    </div>
                    <div className="info-project">
                        <table className="info-project-item">
                            <tr>
                                <td>Local:</td>
                                <td>Data:</td>
                                <td>Tempo de execução:</td>
                            </tr>
                            <tr>
                                <td>Riviera de São Lourenço, Bertioga-SP</td>
                                <td>24/24/2024</td>
                                <td>3 Meses</td>
                            </tr>
                        </table>
                    </div>

                    <div className="texts-details-project">

                        <h2>
                            Análise Estratégica
                        </h2>

                        <p>
                            Antes de iniciar a instalação do sistema de CFTV, nossa equipe de especialistas conduziu uma análise minuciosa das instalações do cliente. Com base nessa avaliação criteriosa, identificamos os pontos críticos que requeriam monitoramento constante e desenvolvemos uma estratégia personalizada para maximizar a segurança.

                        </p>
                        <h2>
                            Solução Personalizada
                        </h2>
                        <p>
                            Nossa equipe projetou um sistema de CFTV sob medida, levando em consideração os requisitos específicos do cliente. Utilizando equipamentos de ponta e câmeras de alta resolução, montamos um conjunto de câmeras estrategicamente posicionadas em locais-chave, como entradas, corredores e áreas com alto fluxo de pessoas. Combinando câmeras fixas e PTZ, garantimos uma cobertura abrangente e flexível.
                        </p>

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
                <Footer />
            </SectionContainer>
        </>
    );
}

export default ProjectCFTV;