import React from "react";

import Navbar from "../../components/Navbar";
import SectionContainer from "../../components/SectionContainer";
import ContactButtons from "../../components/ContactButtons";
import Footer from "../../components/Footer";

import "./styles.css";

const About: React.FC = () => {
    return (
        <>
            <Navbar />
            <SectionContainer id="about-page">
                <div className="about-page-texts">
                    <h1 className="about-page-title">
                        CONECT HOUSE
                    </h1>
                    <p className="about-page-description">
                        <span>- </span>
                        Empresa de Tecnologia da Informação
                    </p>
                </div>

                <section className="about-page-item section-who">
                    <div className="about-page-section-who_texts">
                        <h2 className="about-page-section-who_title">Quem Somos</h2>
                        <p className="about-page-section-who_description">
                            Bem-vindo à Connect House, a empresa líder em automação residencial e predial.
                            Combinando tecnologia avançada e expertise em automação, estamos transformando casas e empresas
                            em espaços conectados, seguros e inteligentes. Nossa paixão pela inovação e nossa busca constante
                            por soluções personalizadas nos tornaram referência no mercado.
                        </p>
                        <p className="about-page-section-who_description">
                            Na Connect House, entendemos que cada projeto é único. Nossa equipe de profissionais altamente
                            qualificados trabalha em estreita colaboração com você para entender suas necessidades e transformar
                            suas ideias em realidade. Desde a fase de planejamento até a implementação e manutenção contínua,
                            estamos comprometidos em oferecer soluções de automação excepcionais que superam suas expectativas.
                            Sua satisfação é a nossa prioridade.
                        </p>
                    </div>
                    
                    <div className="about-page-images">
                        <img
                            className="about-page-images_internalwork-image"
                            src="https://connecthouse.vercel.app/static/images/services/internal-work.png"
                            alt="Pequeno Grande Homem"
                        />
                        <img
                            className="about-page-images_externalwork-image"
                            src="https://connecthouse.vercel.app/static/images/services/external-work.png"
                            alt="Pequeno Grande Homem"
                        />
                    </div>
                </section>
                
                <section className="about-page-item">
                    <h2 className="about-page-texts_title">Nossa Experiência</h2>
                    <p className="about-page-texts_description">
                        Ao longo dos anos, concluímos com sucesso mais de 50 projetos, atendendo às necessidades de
                        residências e empresas de diferentes portes. Nossa equipe altamente qualificada e experiente
                        possui conhecimentos técnicos avançados e está comprometida em oferecer soluções de automação
                        de alta qualidade.
                    </p>
                    <p className="about-page-texts_description">
                        Além disso, na nossa jornada, desenvolvemos parcerias sólidas com as principais marcas do setor,
                        garantindo o acesso aos mais inovadores e confiáveis produtos de automação disponíveis no mercado.
                        Essa expertise nos permite personalizar cada projeto para atender de forma única e eficiente às
                        necessidades específicas dos nossos clientes, sempre priorizando a qualidade, eficiência e satisfação
                        em cada etapa do processo.
                    </p>
                </section>

                <section className="about-page-item">
                    <h2 className="about-page-texts_title">Nossos Serviços</h2>
                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Automação Residencial e Predial</h3>
                        <p className="about-page-item-service_description">
                            Oferecemos soluções abrangentes de automação residencial e predial para tornar sua casa
                            ou empresa mais eficiente e confortável. Desde sistemas de iluminação inteligente até
                            controle de temperatura e segurança avançada, criamos ambientes personalizados que se
                            adaptam às suas necessidades.
                        </p>
                    </div>

                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Cabeamento de Rede</h3>
                        <p className="about-page-item-service_description">
                            Contamos com uma equipe especializada em projetar e instalar redes de alta velocidade e
                            desempenho. Nossos serviços de cabeamento de rede garantem uma conexão estável e confiável,
                            essencial para suportar os dispositivos conectados em sua casa ou empresa.
                        </p>
                    </div>

                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Instalação de Sistema CFTV</h3>
                        <p className="about-page-item-service_description">
                            Proteja sua propriedade com nossos sistemas avançados de CFTV (Circuito Fechado de
                            Televisão). Nossos especialistas projetam e instalam câmeras de segurança de alta resolução
                            para monitoramento 24 horas por dia, oferecendo tranquilidade e segurança para você e sua
                            família ou negócio.
                        </p>
                    </div>

                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Montagem de Racks de TI</h3>
                        <p className="about-page-item-service_description">
                            Nossa equipe qualificada realiza a montagem e organização de racks de TI, garantindo a
                            correta instalação e conexão de equipamentos de rede e servidores. Isso resulta em uma
                            infraestrutura de TI eficiente e de fácil gerenciamento para sua empresa.
                        </p>
                    </div>

                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Cabeamento de Fibra Óptica</h3>
                        <p className="about-page-item-service_description">
                            Realizamos serviços de cabeamento de fibra óptica para garantir uma conexão rápida e estável
                            em sua residência ou empresa. A fibra óptica oferece maior

                            largura de banda e velocidades de
                            transmissão mais rápidas, tornando-a ideal para aplicações que exigem alto desempenho de rede.
                        </p>
                    </div>

                    <div className="about-page-item-service">
                        <h3 className="about-page-item-service_title">Fusão da Fibra Óptica</h3>
                        <p className="about-page-item-service_description">
                            Nossos técnicos experientes realizam a fusão da fibra óptica de forma precisa e confiável.
                            Esse processo é essencial para garantir uma conexão óptica contínua e de baixa perda,
                            proporcionando uma transmissão de dados eficiente e confiável.
                        </p>
                    </div>
                </section>

                <section className="about-page-item">
                    <h2 className="about-page-texts_title">Entre em Contato</h2>
                    <p className="about-page-texts_description">
                        Descubra como a Connect House pode ajudá-lo a transformar sua casa ou
                        empresa em um ambiente conectado, seguro e inteligente. Entre em contato conosco hoje mesmo
                        para obter mais informações ou agendar uma consulta. Estamos ansiosos para trabalhar com você e
                        tornar sua visão de automação uma realidade.
                    </p>
                   <ContactButtons />
                </section>
                <Footer logo="https://connecthouse.vercel.app/logowhite.svg" />
            </SectionContainer>
        </>
    );
};

export default About;
