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
                <Link to="https://connecthouse.vercel.app">
                    <img
                        className="logo"
                        alt="Logo Connect House"
                        src={LogoImage}
                    />
                </Link>

                <ul className="main-nav-list">
                    <Link to="https://connecthouse.vercel.app">
                        <li className="main-nav-item">
                            <span className="main-nav-link">Inicio</span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/sobre">
                        <li className="main-nav-item">
                            <span className="main-nav-link">Sobre</span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/servicos">
                        <li className="main-nav-item">
                            <span className="main-nav-link">Serviços</span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/projetos">
                        <li className="main-nav-item">
                            <span className="main-nav-link">Projetos</span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/contato">
                        <li className="main-nav-item">
                            <span className="main-nav-link">Contato</span>
                        </li>
                    </Link>
                </ul>
                <div className={menuToggle} onClick={openMenuToggle} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* DROP DOWN MENU */}
            <nav id={dropDown}>
                <ul className="drop-down-nav-list">
                    <Link to="https://connecthouse.vercel.app">
                        <li className="drop-down-nav-item">
                            <span
                                className="drop-down-nav-link"
                                data-text="Sobre"
                                onClick={openMenuToggle}
                            >
                                Inicio
                            </span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/sobre">
                        <li className="drop-down-nav-item">
                            <span
                                className="drop-down-nav-link"
                                data-text="Sobre"
                                onClick={openMenuToggle}
                            >
                                Sobre
                            </span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/servicos">
                        <li className="drop-down-nav-item">
                            <span
                                className="drop-down-nav-link"
                                data-text="Serviços"
                                onClick={openMenuToggle}
                            >
                                Serviços
                            </span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/projetos">
                        <li className="drop-down-nav-item">
                            <span
                                className="drop-down-nav-link"
                                data-text="Projetos"
                                onClick={openMenuToggle}
                            >
                                Projetos
                            </span>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/contato">

                        <li className="drop-down-nav-item">
                            <span
                                className="drop-down-nav-link"
                                data-text="Contato"
                                onClick={openMenuToggle}
                            >
                                Contato
                            </span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;