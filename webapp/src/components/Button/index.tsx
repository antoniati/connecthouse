import React, { useState } from "react";

type ButtonProps = { text: string; textColor?: string; fillColor: string; hoverColor: string; hoverText?: string; borderColor?: string; };

const Button: React.FC<ButtonProps> = ({ text, fillColor, hoverColor, borderColor, textColor, hoverText }) => {
    const [hoverEffect, setHoverEffect] = useState(false);
    
    const handleMouseEnter = () => { setHoverEffect(true); };
    const handleMouseLeave = () => { setHoverEffect(false); };
    
  return (
    <button className="button" style={{ width: '275px', height: '60px', padding: '20px', backgroundColor: hoverEffect ? hoverColor : fillColor, color: hoverEffect ? hoverText : textColor, border: `2px solid ${borderColor}`, borderRadius: "30rem", fontSize: "20px", fontWeight: "bold", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease-in-out", }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > {text} </button>
  );
};

export default Button;