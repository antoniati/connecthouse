import Button from "../Button"

const ContactButtons: React.FC = () => {
    return(
        <div 
            style={{
                width: "100%",
                height: "auto",
                padding: "1rem",
               
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
            }}
        >
        <a href="https://connecthouse.vercel.app/contato">
            <Button
                text="Entre em Contato"
                textColor="#FA9428"
                fillColor="#141821"
                borderColor="#FA9428"
                hoverText="white"
                hoverColor="#FAA64C"
            />

        </a>
        
        <a href="https://wa.me/5519989288560" target="_blank">
            <Button
                text="Whatsapp"
                textColor="#FFF"
                fillColor="#25D366"
                hoverColor="#52E086"
                hoverText="white"
                borderColor="#25D366"
            />
        </a>
        
        <a href="https://t.me/palmeiras" target="_blank">
            <Button
                text="Telegram"
                textColor="#FFF"
                fillColor="#00BBCC"
                hoverColor="#00CEE0"
                hoverText="white"
                borderColor="#00BBCC"
            />
        </a>
    </div>
    )
}

export default ContactButtons;