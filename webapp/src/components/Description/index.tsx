import React from "react";

interface DescriptionProps {
    descriptionText: string;
}

const Description: React.FC<DescriptionProps> = ({descriptionText}) => {
    return <p 
        className="description-text"
        style={{
            width: "95%",
            maxWidth: "968px",
            fontSize: "30px",
            fontWeight: 400,
            lineHeight: "2.56rem",
            textAlign: "center",
            letterSpacing: "2px",
        }}
    >
        {descriptionText}    
    </p>
}

export default Description;