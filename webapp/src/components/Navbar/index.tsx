import React from "react";

import { useState } from "react";
import LogoImage from "../../assets/logo.svg";

import "./styles.css";

const Navbar: React.FC = () => {
    const [menuToggle, setMenuToggle] = useState("menu-toggle")
    const [dropDown, setDropDown] = useState("drop-down-menu")

    function openMenuToggle() {
        // Show Menu Toggle
        if (menuToggle === "menu-toggle") {
            setMenuToggle("menu-toggle-open")
        } else if (menuToggle === "menu-toggle-open") {
            setMenuToggle("menu-toggle")
        }

        // Show Drop Down
        if (dropDown === "drop-down-menu") {
            setDropDown("drop-down-menu-open")
        } else if (dropDown === "drop-down-menu-open") {
            setDropDown("drop-down-menu")
        }
    }

    return (
        <>
            <nav id="navbar">
                <img className="logo" alt="Logo Connect House" src={LogoImage} />

                <ul className="main-nav-list">
                    <li className="main-nav-item">
                            <a href="#about-section" className="main-nav-link">Sobre</a>
                    </li>
                    <li className="main-nav-item">
                            <a href="#services-section" className="main-nav-link">Serviços</a>
                    </li>
                    <li className="main-nav-item">
                            <a href="#projects-section" className="main-nav-link">Projetos</a>
                    </li>
                    <li className="main-nav-item">
                            <a href="#contact-section" className="main-nav-link">Contato</a>
                    </li>
                </ul>

                <div className={menuToggle} onClick={openMenuToggle}> <span></span> <span></span> <span></span> </div>
            </nav>

            {/* DROP DOWN MENU */}
            <nav id={dropDown}>
                <ul className="drop-down-nav-list">
                    <li className="drop-down-nav-item">
                            <a 
                                href="#about-section" 
                                className="drop-down-nav-link" 
                                data-text="Sobre"
                                onClick={openMenuToggle} 
                            > 
                                    Sobre 
                            </a>
                    </li>
                    <li className="drop-down-nav-item">
                            <a 
                                href="#services-section" 
                                className="drop-down-nav-link" 
                                data-text="Serviços" 
                                onClick={openMenuToggle} 
                            > 
                                Serviços 
                            </a>
                    </li>
                    <li className="drop-down-nav-item">
                            <a 
                                href="#projects-section" 
                                className="drop-down-nav-link" 
                                data-text="Projetos"  
                                onClick={openMenuToggle} 
                            > 
                                Projetos 
                            </a>
                    </li>
                    <li className="drop-down-nav-item">
                            <a 
                                href="#contact-section" 
                                className="drop-down-nav-link" 
                                data-text="Contato" 
                                onClick={openMenuToggle} 
                            > 
                                Contato 
                            </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;