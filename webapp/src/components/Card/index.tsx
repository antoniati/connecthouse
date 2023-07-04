import React from "react";

import "./styles.css";

type Props = {
  title: string;
  description: string;
  image: string;
  children: JSX.Element;
};

const Card: React.FC<Props> = ({
  image,
  title,
  description,
  children
}) => {
  return (
    <li className="service-card">
      <div className="service-card-icon">
        <img src={image} alt={title} />
      </div>
      <div className="service-card-texts">
        <h3 className="service-card-title">
          {title}
        </h3>
        <p className="service-card-description">
          {description}
        </p>
      </div>
      <div className="service-card-footer">
        {children}
      </div>
    </li>
  );
};

export default Card;
