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
                <img
                    className="logo"
                    alt="Logo Connect House"
                    src={LogoImage}
                />

                <ul className="main-nav-list">
                    <Link to="https://connecthouse.vercel.app/sobre">
                        <li className="main-nav-item">
                            <a className="main-nav-link">Sobre</a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/servicos">
                        <li className="main-nav-item">
                            <a className="main-nav-link">Serviços</a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/projetos">
                        <li className="main-nav-item">
                            <a className="main-nav-link">Projetos</a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/contato">
                        <li className="main-nav-item">
                            <a className="main-nav-link">Contato</a>
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
                    <Link to="https://connecthouse.vercel.app/sobre">
                        <li className="drop-down-nav-item">
                            <a
                                className="drop-down-nav-link"
                                data-text="Sobre"
                                onClick={openMenuToggle}
                            >
                                Sobre
                            </a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/servicos">
                        <li className="drop-down-nav-item">
                            <a
                                className="drop-down-nav-link"
                                data-text="Serviços"
                                onClick={openMenuToggle}
                            >
                                Serviços
                            </a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/projetos">
                        <li className="drop-down-nav-item">
                            <a
                                className="drop-down-nav-link"
                                data-text="Projetos"
                                onClick={openMenuToggle}
                            >
                                Projetos
                            </a>
                        </li>
                    </Link>
                    <Link to="https://connecthouse.vercel.app/contato">

                        <li className="drop-down-nav-item">
                            <a
                                className="drop-down-nav-link"
                                data-text="Contato"
                                onClick={openMenuToggle}
                            >
                                Contato
                            </a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;