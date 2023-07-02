import React from "react";

interface InputProps {
    classInput: string;
    typeInput: string;
    nameInput: string;
    textPlaceholder: string;
    
    textFor: string;
    textLabel: string;
}

const InputForm: React.FC<InputProps> = ({
    classInput,
    typeInput,
    nameInput,
    textPlaceholder,
    
    textFor,
    textLabel,
}) => {
    return (
        <div className="input-container" style={{width: "100%"}}>
            <label 
                htmlFor={textFor} 
                style={{
                    width: "100%",
                    display: "block",
                    fontWeight: "bold",
                    marginLeft: "5px",
                    marginBottom: "5px",
                }}
            >
                {textLabel}
            </label>

            <input
                className={classInput}
                type={typeInput}
                name={nameInput}
                placeholder={textPlaceholder}
                style={{
                    width: "100%",
                    padding: "1rem",
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                }}
            />
        </div>
    )
}

export default InputForm;