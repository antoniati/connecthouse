import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionContainer from "../../components/SectionContainer";
import Button from "../../components/Button";
import "./styles.css";

interface Project {
  title: string;
  image: string;
  urlLink: string;
}

interface ProjectsData {
  projects: Project[];
}

const LightingProject: React.FC = () => {
  const [projectsData, setProjectsData] = useState<ProjectsData>({
    projects: [],
  });
  const [activeCategory, setActiveCategory] = useState("Todos");

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://connecthouse.vercel.app/static/data/projects.json");
        const data = await response.json();

        setProjectsData(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProjects = activeCategory === "Todos"
    ? projectsData.projects
    : projectsData.projects.filter(
        project => project.title.includes(activeCategory)
      );

  return (
    <>
      <Navbar />
      <SectionContainer id="projects-page">
        <h1 className="projects-page_title">São mais de 50 projetos realizados com sucesso!</h1>
        <p className="projects-page_description">Atendemos às necessidades de residências e empresas de diferentes portes</p>
        <div className="projects-page-navigation">
          <div
            className={`projects-page-navigation_button-all ${activeCategory === "Todos" ? "active" : ""}`}
            onClick={() => setActiveCategory("Todos")}
          >
            Todos
          </div>
          <div
            className={`projects-page-navigation_button-ilum ${activeCategory === "Iluminação" ? "active" : ""}`}
            onClick={() => setActiveCategory("Iluminação")}
          >
            Iluminação
          </div>
          <div
            className={`projects-page-navigation_button-cftv ${activeCategory === "CFTV" ? "active" : ""}`}
            onClick={() => setActiveCategory("CFTV")}
          >
            CFTV
          </div>
        </div>
        <div className="projects-page-slider">
          {filteredProjects.map((project, index) => (
            <a href={project.urlLink} key={index}>
              <div className="projects-page-slider_item">
                <img src={project.image} alt={project.title} />
                <h2 className="projects-page-slider_title">
                  {project.title}
                </h2>
                <div className="project-page-slider_button-details">
                <Button
                  text="Ver Detalhes"
                  textColor="#FA9428"
                  fillColor="transparent"
                  borderColor="#FA9428"
                  hoverText="FA9428"
                  hoverColor="transparent"
                />
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="projects-page-contact">

        <h2 className="projects-page-contact_title">Entre em Contato</h2>
                    <p className="projects-page-contact_description">
                        Descubra como a Connect House pode ajudá-lo a transformar sua casa ou
                        empresa em um ambiente conectado, seguro e inteligente. Entre em contato conosco hoje mesmo
                        para obter mais informações ou agendar uma consulta. Estamos ansiosos para trabalhar com você e
                        tornar sua visão de automação uma realidade.
                    </p>
        <div className="btn-about-info">
                    <a href="https://connecthouse.vercel.app/contato">
                        <Button
                            text="Entre em Contato"
                            textColor="#FA9428"
                            fillColor="#141821"
                            borderColor="#FA9428"
                            hoverText="white"
                            hoverColor="#FAA64C"
                        />

                    </a>
                    <a href="https://wa.me/5519989288560" target="_blank">
                        <Button
                            text="Whatsapp"
                            textColor="#FFF"
                            fillColor="#25D366"
                            hoverColor="#52E086"
                            hoverText="white"
                            borderColor="#25D366"
                        />
                    </a>
                    <a href="https://t.me/palmeiras" target="_blank">
                        <Button
                            text="Telegram"
                            textColor="#FFF"
                            fillColor="#00BBCC"
                            hoverColor="#00CEE0"
                            hoverText="white"
                            borderColor="#00BBCC"
                        />
                    </a>
                </div>
        </div>
        <Footer logo="https://connecthouse.vercel.app/static/images/logo/logowhite.svg" />
      </SectionContainer>
    </>
  );
};

export default LightingProject;
