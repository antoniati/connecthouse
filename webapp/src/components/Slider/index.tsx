import React from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";

import servicesData from "../../static/data/services-data.json";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "./styles.css"
import { Link } from "react-router-dom";

const Slider: React.FC = () => {
    return (
        <Swiper className="slider-wrapper" spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1, }, 640: { slidesPerView: 2, }, 1023: { slidesPerView: 3, } }} >
            {servicesData.services.map((service, index) => (
                <SwiperSlide className="slider-item" key={index}>
                    <Card image={service.image} title={service.title} description={service.description} >
                        <Link to="http://localhost:5173/services">
                            <Button text="Saiba Mais" textColor="#FA9428" fillColor="transparent" hoverColor="#FA9428" hoverText="white" borderColor="#FA9428" />
                        </Link>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
