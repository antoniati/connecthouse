import React from "react";

import "./styles.css";
import MapLeaflet from "../MapLeaflet";
import InputForm from "../InputForm";
import TextareaForm from "../TextareaForm";
import { Link } from "react-router-dom";
import Button from "../Button";

const ContactForm: React.FC = () => {
    return (
        <section id="contact-container">
            <div className="contact-content">
                <form className="contact-form">
                    <h3>Envie uma mensagem</h3>
                    <InputForm
                        classInput="input-name"
                        typeInput="text"
                        nameInput="name"
                        textPlaceholder="Jhon"
                        textFor="input-name"
                        textLabel="Seu Nome ou Nome da Empresa:"
                    />
                    <InputForm
                        classInput="input-email"
                        typeInput="email"
                        nameInput="email"
                        textPlaceholder="jhon@email.com"
                        textFor="input-email"
                        textLabel="Email:"
                    />
                    <InputForm
                        classInput="input-whatsapp"
                        typeInput="text"
                        nameInput="whatsapp"
                        textPlaceholder="xx-xxxxx-xxxx"
                        textFor="input-whasapp"
                        textLabel="Whatsapp:"
                    />
                    <TextareaForm
                        classTextArea="input-textarea"
                        nameTextArea="story"
                        textPlaceholder="Escreva aqui sua Mensagem..."
                        textFor="input-textarea"
                        textLabel="Mensagem::"
                    />
                </form>
                <MapLeaflet />
                <div className="talk-us">
                    <h3 className="talk-us-title">
                       Fale Conosco 
                    </h3>
                    <Link to="/about">
                        <Button 
                            text="Whatsapp" 
                            textColor="#FFF" 
                            fillColor="#25D366" 
                            hoverColor="#52E086" 
                            hoverText="white" 
                            borderColor="#25D366" 
                        />
                    </Link>
                    <Link to="/about">
                        <Button 
                            text="Telegram" 
                            textColor="#FFF" 
                            fillColor="#00BBCC" 
                            hoverColor="#00CEE0" 
                            hoverText="white" 
                            borderColor="#00BBCC" 
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;