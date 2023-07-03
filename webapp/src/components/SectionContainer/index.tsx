import React, { ReactNode } from "react";

interface SectionContainerProps {
    id: string;
    refElement: React.RefObject<HTMLDivElement>;
    children: ReactNode;
};

const SectionContainer: React.FC<SectionContainerProps> = ({ 
    children, id, refElement 
}) => {
    return <div
        id={id}
        ref={refElement}
        
        // Estilos
        style={{
            // Dimensão e Preenchimento
            width: "100%",
            height: "auto",
            paddingTop: "4.75rem",

            // Exibição, Alinhamento, Direção e Espaçamento
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
        }}
    >
        {children}
    </div>
};

export default SectionContainer;