import React from "react";

import { useState } from "react";
import LogoImage from "../../assets/logo.svg";

import "./styles.css";
import { Link } from "react-router-dom";

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
                        <Link to="http://localhost:5173/about">
                            <a className="main-nav-link">Sobre</a>
                        </Link>
                    </li>
                    <li className="main-nav-item">
                        <Link to="#services">
                            <a className="main-nav-link">Serviços</a>
                        </Link>
                    </li>
                    <li className="main-nav-item">
                        <Link to="#projects">
                            <a className="main-nav-link">Projetos</a>
                        </Link>
                    </li>
                    <li className="main-nav-item">
                        <Link to="#contact">
                            <a className="main-nav-link">Contato</a>
                        </Link>
                    </li>
                </ul>

                <div className={menuToggle} onClick={openMenuToggle}> <span></span> <span></span> <span></span> </div>
            </nav>

            {/* DROP DOWN MENU */}
            <nav id={dropDown}>
                <ul className="drop-down-nav-list">
                    <li className="drop-down-nav-item">
                        <Link to="http://localhost:5173/about">
                            <a className="drop-down-nav-link" data-text="Sobre" href="#about" > Sobre </a>
                        </Link>
                    </li>
                    <li className="drop-down-nav-item">
                        <Link to="http://localhost:5173/services">
                            <a className="drop-down-nav-link" data-text="Serviços" href="#services" > Serviços </a>
                        </Link>
                    </li>
                    <li className="drop-down-nav-item">
                        <Link to="http://localhost:5173/projects">
                            <a className="drop-down-nav-link" data-text="Projetos" href="#projects" > Projetos </a>
                        </Link>
                    </li>
                    <li className="drop-down-nav-item">
                        <Link to="http://localhost:5173/contact">
                            <a className="drop-down-nav-link" data-text="Contato" href="#contact" > Contato </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;