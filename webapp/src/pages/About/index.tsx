import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { Link } from "react-router-dom";
import Button from "../../components/Button";

import internalWorkImage from "../../assets/internal-work.png"
import externalWorkImage from "../../assets/external-work.png"
import imageTeste from "../../assets/image 5.png"

import "./styles.css";

const About: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="about-page">
                <h1 className="title">Transforme sua Casa em um Ambiente Conectado, Seguro e Inteligente</h1>
                <section className="section section-about">
                    <div className="about-page-section-texts">
                    <h2 className="section-title">Quem Somos</h2>
                    <p className="section-description">
                        Bem-vindo à Connect House, a empresa líder em automação residencial e predial.
                        Combinando tecnologia avançada e expertise em automação, estamos transformando casas e empresas
                        em espaços conectados, seguros e inteligentes. Nossa paixão pela inovação e nossa busca constante
                        por soluções personalizadas nos tornaram referência no mercado.
                    </p>
                    <p className="section-description">
                        Na Connect House, entendemos que cada projeto é único. Nossa equipe de profissionais altamente
                        qualificados trabalha em estreita colaboração com você para entender suas necessidades e transformar
                        suas ideias em realidade. Desde a fase de planejamento até a implementação e manutenção contínua,
                        estamos comprometidos em oferecer soluções de automação excepcionais que superam suas expectativas.
                        Sua satisfação é a nossa prioridade.
                    </p>
                    </div>
                    <div className="about-images">
                        <img
                            className="internalwork-image-about"
                            src={internalWorkImage}
                            alt="Pequeno Grande Homem"
                        />
                        <img
                            className="externalwork-image-about"
                            src={externalWorkImage}
                            alt="Pequeno Grande Homem"
                        />
                    </div>
                </section>
                <section className="section">
                    <h2 className="section-title">Nossa Experiência</h2>
                    <p className="section-description">
        Ao longo dos anos, concluímos com sucesso mais de 50 projetos, atendendo às necessidades de
        residências e empresas de diferentes portes. Nossa equipe altamente qualificada e experiente
        possui conhecimentos técnicos avançados e está comprometida em oferecer soluções de automação
        de alta qualidade.
    </p>
    <p className="section-description">
        Além disso, na nossa jornada, desenvolvemos parcerias sólidas com as principais marcas do setor,
        garantindo o acesso aos mais inovadores e confiáveis produtos de automação disponíveis no mercado.
        Essa expertise nos permite personalizar cada projeto para atender de forma única e eficiente às
        necessidades específicas dos nossos clientes, sempre priorizando a qualidade, eficiência e satisfação
        em cada etapa do processo.
    </p>
                </section>
                <section className="section">
                    <h2 className="section-title">Nossos Serviços</h2>
                    <div className="service">
                        <h3 className="service-title">Automação Residencial e Predial</h3>
                        <p className="service-description">
                            Oferecemos soluções abrangentes de automação residencial e predial para tornar sua casa
                            ou empresa mais eficiente e confortável. Desde sistemas de iluminação inteligente até
                            controle de temperatura e segurança avançada, criamos ambientes personalizados que se
                            adaptam às suas necessidades.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Cabeamento de Rede</h3>
                        <p className="service-description">
                            Contamos com uma equipe especializada em projetar e instalar redes de alta velocidade e
                            desempenho. Nossos serviços de cabeamento de rede garantem uma conexão estável e confiável,
                            essencial para suportar os dispositivos conectados em sua casa ou empresa.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Instalação de Sistema CFTV</h3>
                        <p className="service-description">
                            Proteja sua propriedade com nossos sistemas avançados de CFTV (Circuito Fechado de
                            Televisão). Nossos especialistas projetam e instalam câmeras de segurança de alta resolução
                            para monitoramento 24 horas por dia, oferecendo tranquilidade e segurança para você e sua
                            família ou negócio.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Montagem de Racks de TI</h3>
                        <p className="service-description">
                            Nossa equipe qualificada realiza a montagem e organização de racks de TI, garantindo a
                            correta instalação e conexão de equipamentos de rede e servidores. Isso resulta em uma
                            infraestrutura de TI eficiente e de fácil gerenciamento para sua empresa.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Cabeamento de Fibra Óptica</h3>
                        <p className="service-description">
                            Realizamos serviços de cabeamento de fibra óptica para garantir uma conexão rápida e estável
                            em sua residência ou empresa. A fibra óptica oferece maior

                            largura de banda e velocidades de
                            transmissão mais rápidas, tornando-a ideal para aplicações que exigem alto desempenho de rede.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-title">Fusão da Fibra Óptica</h3>
                        <p className="service-description">
                            Nossos técnicos experientes realizam a fusão da fibra óptica de forma precisa e confiável.
                            Esse processo é essencial para garantir uma conexão óptica contínua e de baixa perda,
                            proporcionando uma transmissão de dados eficiente e confiável.
                        </p>
                    </div>
                </section>
              
                <section className="section">
                    <h2 className="section-title">Entre em Contato</h2>
                    <p className="section-description">
                        Descubra como a Connect House pode ajudá-lo a transformar sua casa ou
                        empresa em um ambiente conectado, seguro e inteligente. Entre em contato conosco hoje mesmo
                        para obter mais informações ou agendar uma consulta. Estamos ansiosos para trabalhar com você e
                        tornar sua visão de automação uma realidade.
                    </p>
                    <div className="btn-about-info">
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
                </section>
                <Footer logo="https://connecthouse.vercel.app/logodark.svg" />
            </SectionContainer>
        </>
    );
};

export default About;
