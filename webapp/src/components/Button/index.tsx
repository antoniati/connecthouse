import React, { useState } from "react";

type ButtonProps = { 
  text: string; 
  textColor?: string; 
  fillColor: string; 
  hoverColor: string; 
  hoverText?: string; 
  borderColor?: string; 
  clickFunction?: React.MouseEventHandler<HTMLButtonElement>;
  typeButton?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({ 
  text, 
  fillColor, 
  hoverColor, 
  borderColor, 
  textColor, 
  hoverText,
  typeButton,
  clickFunction 
}) => {

  const [hoverEffect, setHoverEffect] = useState(false);
  
  const handleMouseEnter = () => { setHoverEffect(true); };
  const handleMouseLeave = () => { setHoverEffect(false); };
    
  return (
    <button 
      className="button"
      onClick={clickFunction}
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}  
      type={typeButton}
      style={{ 
        width: '275px', 
        height: '60px', 
        padding: '20px', 
        backgroundColor: hoverEffect ? hoverColor : fillColor, 
        color: hoverEffect ? hoverText : textColor, 
        border: `2px solid ${borderColor}`, 
        borderRadius: "30rem", 
        fontSize: "20px", 
        fontWeight: "bold", 
        textAlign: "center", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        transition: "all 0.3s ease-in-out", 
      }} 
    > 
      {text} 
    </button>
  );
};

export default Button;