interface FooterProps {
    logo: string;
}

import "./styles.css"

const Footer: React.FC<FooterProps> = ({logo}) => {
    return(
        <div className="footer-container">
        <footer className="footer">
            <p className="footer-text">
                &copy; 2023 Connect House.
                <span>
                    Todos os direitos reservados.
                </span>
            </p>
            <img src={logo} alt="Logo da Empresa Connect House" />
        </footer>
    </div>
    )
}

export default Footer;