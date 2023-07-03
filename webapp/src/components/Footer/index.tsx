import logoImage from "../../assets/logo-svg.svg";

import "./styles.css"

const Footer: React.FC = () => {
    return(
        <div className="footer-container">
        <footer className="footer">
            <p className="footer-text">
                &copy; 2023 Connect House.
                <span>
                    Todos os direitos reservados.
                </span>
            </p>
            <img src={logoImage} alt="Logo do Programador Felipe Antoniati" />
        </footer>
    </div>
    )
}

export default Footer;