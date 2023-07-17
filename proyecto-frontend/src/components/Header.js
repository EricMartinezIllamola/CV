import React from 'react';

function Header() {
    const [open_menu, setOpen_menu] = React.useState(false);

    return (
        <header id="header">
            <ul className={open_menu ? "mostrar_menu" : ""} >
                <li className="first_li"><a href="#home">HOME</a></li>
                <li><a href="#Objetivos">ABOUT ME</a></li>
                <li><a href="#expand_HardSkills">HARD SKILLS</a></li>
                <li className="dropdown"><a href="#Experiencia">PORTFOLIO <span className="material-symbols-outlined">expand_more</span></a>
                    <ul className="content_dropdown">
                        <li><a href="#">PROJECT 1</a></li>
                        <li><a href="#">PROJECT 2</a></li>
                        <li><a href="#">PROJECT 3</a></li>
                        <li><a href="#">PROJECT 4</a></li>
                        <li><a href="#">PROJECT 5</a></li>
                    </ul>
                </li>
                <li><a href="#SoftSkills">SOFT SKILLS</a></li>
                <li><a href="#Contactar">CONTACTAR</a></li>
                <li className="dropdown last_li"><a href="#Objetivos">IDIOMA <span className="material-symbols-outlined">expand_more</span></a>
                    <ul className="content_dropdown">
                        <li><a href="#Objetivos">CAT</a></li>
                        <li><a href="#Objetivos">ES</a></li>
                        <li><a href="#Objetivos">EN</a></li>
                    </ul>
                </li>
            </ul>
            <button className="btn_menu" id="btn_menu" onClick={()=>{setOpen_menu(!open_menu)}}><span className="material-symbols-outlined span_menu">Menu</span></button>
        </header>
    );
}

export default Header;