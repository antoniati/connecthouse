import React from "react";

interface SectionContainerProps {
    id?: string;
    children: any;
};

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id }) => {
    return <section
        id={id}
        style={{
            width: "100%",
            height: "768px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "20px",
        }}
    >
        {children}
    </section>
};

export default SectionContainer;