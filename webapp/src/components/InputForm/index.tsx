import React from "react";

interface InputProps {
    classInput: string;
    typeInput: string;
    nameInput: string;
    textPlaceholder: string;
    
    textFor: string;
    textLabel: string;

    valueInput: string;
    changeEvent: React.ChangeEventHandler<HTMLInputElement>;
    
}

const InputForm: React.FC<InputProps> = ({
    classInput,
    typeInput,
    nameInput,
    textPlaceholder,
    
    textFor,
    textLabel,

    valueInput,
    changeEvent
}) => {
    return (
        <div 
            className="input-container" 
            style={{
                width: "100%", 
                height: "auto"
            }}
        >
            <label 
                htmlFor={textFor} 
                style={{
                    fontSize: "14px",
                    width: "100%",
                    display: "block",
                    fontWeight: "600",
                    margin: "0",
                }}
            >
                {textLabel}
            </label>

            <input
                className={classInput}
                type={typeInput}
                name={nameInput}
                placeholder={textPlaceholder}
                onChange={changeEvent}
                value={valueInput}
                style={{
                    width: "100%",
                    padding: "0.6rem",
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                }}
            />
        </div>
    )
}

export default InputForm;