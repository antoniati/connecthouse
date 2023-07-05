import React from "react";

interface TalkUsProps {
    id: string;
    children: React.ReactNode;
};

const TalkUs: React.FC<TalkUsProps> = ({ id, children }) => {
    return (
        <div
            id={id}
            style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
                border: "1px solid var(--gray-color)",
                gap: "20px",
                padding: "20px",
            }}
        >
            <h3
                style={{
                    fontSize: "16px",
                    margin: "5px"
                }}
            >
                Fale Conosco
            </h3>
            {children}
        </div>
    );
};

export default TalkUs;