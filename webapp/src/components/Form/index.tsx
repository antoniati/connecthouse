import React from "react";

interface FormProps {
    id: string;
    title: string;
    children: React.ReactNode;
    submit: React.FormEventHandler<HTMLFormElement>;
};

const Form: React.FC<FormProps> = ({id, title, children, submit}) => {
    return (
        <form 
            id={id}
            onSubmit={submit}
            style={{
                width: "100%",
                height: "auto",
                padding: "20px",
            
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px",
              
                borderRadius: "10px",
                border: "1px solid var(--gray-color)",
                color:"var(--dark-color)",
                backgroundColor: "var(--white-color)",
            }}
        >
            <h3 style={{marginBottom: "1.6rem"}}>
                {title}
            </h3>
            {children}
        </form>
    );
};

export default Form;
