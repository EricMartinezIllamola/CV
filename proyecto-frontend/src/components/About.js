import React from 'react';

function About() {
    const [open_perfil_card, setOpen_perfil_card] = React.useState(false);
    const [open_perfil_card_2, setOpen_perfil_card_2] = React.useState(false);

    return (
        <section id="Objetivos">
            <div className={`total_card ${open_perfil_card ? "total_card_click" : ""} ${open_perfil_card_2 ? "total_card_disappear" : ""}`}>
                <div className="perfil_card" onClick={()=>{setOpen_perfil_card(true)}}>
                    <div className="foto_perfil"></div>
                    <ul className="ul_perfil_1">
                        <li>Graduado en Química.</li>
                        <li>Posgrado en Inteligencia de Negocio y Análisis de Datos.</li>
                    </ul>
                    <ul className="ul_perfil_2">
                        <li>Apasionado de los datos, amante del queso y amigo de los perros. Junior Data Scientist,
                            actualmente viviendo en La Garriga, Barcelona.</li>
                    </ul>
                </div>
                <div className="card_backside" onClick={()=>{setOpen_perfil_card_2(true)}}>
                    <ul>
                        <li className="quim">Grado de Química - Universitat de Barcelona (UB)</li>
                        <li>Posgrado de Inteligencia de Negocio y Análisis de
                            Datos - Universitat Oberta de Catalunya (UOC)
                            <ul>
                                <li>Especialización de Analítica de Datos - 1er Semestre</li>
                                <ul>
                                    <li>Fundamentos de Inteligencia de Negocio</li>
                                    <li>Fundamentos de Data Science</li>
                                    <li>Fundamentos del Big Data</li>
                                </ul>
                                <li>Especialización de Gestión de Datos - 2nd Semestre</li>
                                <ul>
                                    <li>Bases de Datos Analíticas</li>
                                    <li>Bases de Datos NoSQL</li>
                                    <li>Data Governance</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={open_perfil_card ? "card_page card_page_click" : "card_page"}>
                <div className="close_card" onClick={()=>{setOpen_perfil_card(false); setOpen_perfil_card_2(false)}}><span className="material-symbols-outlined span_menu">Close</span></div>
                <ul>
                    <li>Programa Formativo de Competencias tecnológicas
                        en Inteligencia Artificial & Machine Learning con
                        Python (+500 horas) - Fundació Esplai</li>
                    <ul className='ul_page2'>
                        <li>Introducción a la programación (HTML, CSS, JavaScript...)</li>
                        <li>Inteligencia Artificial & Machine Learning con Python</li>
                    </ul>
                </ul>
                <div className="iconos_box">
                    <p>eric77711@gmail.com</p>
                    <a href="http://www.google.es" target="_blank" className="iconos icono_lin"></a>
                    <a href="http://www.google.es" target="_blank" className="iconos icono_git"></a>
                </div>
            </div>
        </section>
    );
}

export default About;