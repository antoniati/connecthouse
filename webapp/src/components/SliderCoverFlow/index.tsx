import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
    image: string;
    urlLink: string;
}

interface ProjectsData {
    projects: Project[];
}


import "./styles.css"

const SliderCoverFlow: React.FC = () => {
    const [projectsData, setProjectsData] = useState<ProjectsData>({ projects: [] });

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

    const initialSlide = Math.floor(projectsData.projects.length / 2); // Índice do slide do meio

    return (
        <>
            {projectsData.projects.length > 0 && (
                <Swiper
                    className="slider_container"
                    effect={"coverflow"}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    pagination={{ el: ".swiper-pagination", clickable: true }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{ delay: 5000 }}
                    initialSlide={initialSlide}
                >
                    {projectsData.projects.map((project, index) => (
                        <SwiperSlide className="slider-item-coverflow" key={index}>
                            <a href={project.urlLink}>
                                <p className="slider-item-description">Clique para Visualizar</p>
                            </a>
                            <img src={project.image} alt="image" />
                        </SwiperSlide>
                    ))}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <img
                                src="https://connecthouse.vercel.app/static/images/icons/arrrow-left.svg"
                                alt="Seta Para esquerda"
                            />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <img
                                src="https://connecthouse.vercel.app/static/images/icons/arrow-rigth.svg"
                                alt="Seta para direita"
                            />
                        </div>
                        <div className="swiper-pagination pagination-projects"></div>
                    </div>
                </Swiper>
            )}
        </>
    );

};

export default SliderCoverFlow;
