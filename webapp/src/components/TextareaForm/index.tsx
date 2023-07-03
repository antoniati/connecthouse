import React from "react";

interface InputProps {
    classTextArea: string;
    nameTextArea: string;
    textPlaceholder: string;
    
    textFor: string;
    textLabel: string;

    valueMessage: string;
    changeEvent: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const InputForm: React.FC<InputProps> = ({
    classTextArea,
    nameTextArea,
    textPlaceholder,
    
    textFor,
    textLabel,
    valueMessage,
    changeEvent
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

            <textarea
                className={classTextArea}
                name={nameTextArea}
                placeholder={textPlaceholder}
                onChange={changeEvent}
                value={valueMessage}
                style={{
                    width: "100%",
                    height: "120px",
                    padding: "1rem",
                    border: "1px solid #d3d3d3",
                    borderRadius: "5px",
                }}
            />
        </div>
    )
}

export default InputForm;