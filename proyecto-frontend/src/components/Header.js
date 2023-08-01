import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const [t, i18n] = useTranslation("index");

    const [open_menu, setOpen_menu] = React.useState(false);

    return (
        <header id="header">
            <ul className={open_menu ? "mostrar_menu" : ""} >
                <li className="first_li"><a href="/#home">{t("header.a1")}</a></li>
                <li><a href="/#Objetivos">{t("header.a2")}</a></li>
                <li><a href="/#expand_HardSkills">{t("header.a3")}</a></li>
                <li className="dropdown"><a href="/#Experiencia">{t("header.a4")} <span className="material-symbols-outlined">expand_more</span></a>
                    <ul className="content_dropdown">
                        <li><a href="/Project_1">{t("header.a4_1")}</a></li>
                        <li><a href="/Project_2">{t("header.a4_2")}</a></li>
                        <li><a href="#">PROJECT 3</a></li>
                        <li><a href="#">PROJECT 4</a></li>
                        <li><a href="#">PROJECT 5</a></li>
                    </ul>
                </li>
                <li><a href="#SoftSkills">{t("header.a5")}</a></li>
                <li><a href="#Contactar">{t("header.a6")}</a></li>
                <li className="dropdown last_li"><a className='idioma' href="#Objetivos">{t("header.a7")} <span className="material-symbols-outlined">expand_more</span></a>
                    <ul className="content_dropdown">
                        <li><a href="#Objetivos">{t("header.a7_1")}</a></li>
                        <li><a href="#Objetivos">{t("header.a7_2")}</a></li>
                        <li><a href="#Objetivos">{t("header.a7_3")}</a></li>
                    </ul>
                </li>
            </ul>
            <button className="btn_menu" id="btn_menu" onClick={()=>{setOpen_menu(!open_menu)}}><span className="material-symbols-outlined span_menu">{open_menu ? "Close" : "Menu"}</span></button>
        </header>
    );
}

export default Header;