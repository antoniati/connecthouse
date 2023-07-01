import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import projectsData from "../../static/data/projects-data.json";

import "./styles.css"


const SliderCoverFlow: React.FC = () => {
    return (
        <Swiper
            className="slider_container"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
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
        >
            {projectsData.projects.map((project, index) => (
                <SwiperSlide className="slider-item-coverflow" key={index}>
                    <p>{project.title}</p>
                    <img src={project.image} alt="image" />
                </SwiperSlide>
            ))}
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow"></div>
                <div className="swiper-button-next slider-arrow"></div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    );
};

export default SliderCoverFlow;
