import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionContainer from "../../components/SectionContainer";

interface Project {
    title: string;
    image: string;
    urlLink: string;
}

interface ProjectsData {
    projects: Project[];
}

import "./styles.css";

const LightingProject: React.FC = () => {
    const [projectsData, setProjectsData] = useState<ProjectsData>({ projects: [] });
    
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


    return (
        <>
            <Navbar />
            <SectionContainer id="projects-page">
               <h1 className="projects-page_title">São mais de 50 projetos realizados com sucesso!</h1>
               <p className="projects-page_description">Atendemos às necessidades de residências e empresas de diferentes portes/</p>
               <div className="projects-page_navigation">
                 <div className="projects-page-navigation_button-all">Todos</div>
                 <div className="projects-page-navigation_button-ilum">Iluminação</div>
                 <div className="projects-page-navigation_button-cftv">CFTV</div>
               </div>
               <div className="projects-page-slider">
               {projectsData.projects.map((project, index) => (
                            <a href={project.urlLink} key={index}>
                                <div className="projects-page-slider_item">
                                    <img 
                                        src={project.image}
                                    />
                                    <h2 className="projects-page-slider_title">
                                        {project.title}
                                    </h2>
                                    <p className="projects-page-slider_description">
                                        Ver Detalhes
                                    </p>
                                </div>

                            </a>
                    ))}
               </div> 
                <Footer logo="https://connecthouse.vercel.app/static/images/logo/logowhite.svg" />
            </SectionContainer>
        </>
    )
};
export default LightingProject;
