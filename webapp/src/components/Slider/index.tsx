import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Card from "../../components/Card";
import Button from "../../components/Button";

import { Link } from "react-router-dom";

import "./styles.css"

interface ServiceData {
  image: string;
  title: string;
  description: string;
}

const Slider: React.FC = () => {
  const [servicesData, setServicesData] = useState<{ services: ServiceData[] }>({ services: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://connecthouse.vercel.app/static/data/services.json");
        const data = await response.json();
  
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <Swiper className="slider-wrapper" spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1, }, 640: { slidesPerView: 2, }, 1023: { slidesPerView: 3, } }} >
      {servicesData.services.map((service: ServiceData, index: number) => (
        <SwiperSlide className="slider-item" key={index}>
          <Card image={service.image} title={service.title} description={service.description} >
            <Link to="https://connecthouse.vercel.app/sobre">
              <Button text="Saiba Mais" textColor="#FA9428" fillColor="transparent" hoverColor="#FA9428" hoverText="white" borderColor="#FA9428" />
            </Link>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
