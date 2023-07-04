import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

import InputForm from "../InputForm";
import TextareaForm from "../TextareaForm";
import Button from "../Button";
import MapGoogle from "../MapGoogle";

import "./styles.css";

const ContactForm: React.FC = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [message, setMessage] = useState("")

    function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!name || !email || !whatsapp || !message) {
            alert("Preencha todos os campos do formulario antes de Enviar.")
            return;
        }
        const templateParams = {
            from_name: name,
            email: email,
            whatsapp: whatsapp,
            message: message
        }
        emailjs.send("service_m9vnf8c", "template_yz8sv5v", templateParams, "21x0pO6h91JgUktvO")
            .then((response) => {
                setName("")
                setEmail("")
                setWhatsapp("")
                setMessage("")
                console.log("EMAIL ENVIADO", response.status, response.text)
            })
    }

    return (
        <section id="contact-container">
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSendEmail}>
                <h3>Envie uma Mensagem :</h3>
                    <InputForm
                        classInput="input-name"
                        typeInput="text"
                        nameInput="name"
                        textPlaceholder="Jhon"
                        textFor="input-name"
                        textLabel="Seu Nome ou Nome da Empresa:"
                        valueInput={name}
                        changeEvent={(e) => { setName(e.target.value) }}

                    />
                    <InputForm
                        classInput="input-email"
                        typeInput="email"
                        nameInput="email"
                        textPlaceholder="jhon@email.com"
                        textFor="input-email"
                        textLabel="Email:"
                        valueInput={email}
                        changeEvent={(e) => { setEmail(e.target.value) }}
                    />
                    <InputForm
                        classInput="input-whatsapp"
                        typeInput="text"
                        nameInput="whatsapp"
                        textPlaceholder="xx-xxxxx-xxxx"
                        textFor="input-whasapp"
                        textLabel="Whatsapp:"
                        valueInput={whatsapp}
                        changeEvent={(e) => { setWhatsapp(e.target.value) }}
                    />
                    <TextareaForm
                        classTextArea="input-textarea"
                        nameTextArea="story"
                        textPlaceholder="Escreva aqui sua Mensagem..."
                        textFor="input-textarea"
                        textLabel="Mensagem:"
                        valueMessage={message}
                        changeEvent={(e) => { setMessage(e.target.value) }}
                    />
                    <Button
                        text="Enviar"
                        textColor="#FA9428"
                        fillColor="#141428"
                        hoverColor="#FAA64C"
                        hoverText="white"
                        borderColor="#FA9428"
                        typeButton="submit"
                    />
                </form>
                <div className="talk-us">
                    <h3 className="talk-us-title">
                        ou Fale Conosco
                    </h3>
                    <Link to="https://wa.me/5519989288560" target="_blank">
                        <Button
                            text="Whatsapp"
                            textColor="#FFF"
                            fillColor="#25D366"
                            hoverColor="#52E086"
                            hoverText="white"
                            borderColor="#25D366"
                        />
                    </Link>
                    <Link to="https://t.me/palmeiras" target="_blank">
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

                <MapGoogle />
            </div>
        </section>
    )
}

export default ContactForm;