import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
    const [open_perfil_card, setOpen_perfil_card] = React.useState(false);
    const [open_perfil_card_2, setOpen_perfil_card_2] = React.useState(false);

    const [t, i18n] = useTranslation("index");

    const cv_download = () => {
        fetch('CV_Èric Martínez.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Èric Martínez.pdf';
                alink.click();
            })
        })
    }

    return (
        <section id="Objetivos">
            <div className={`total_card ${open_perfil_card ? "total_card_click" : ""} ${open_perfil_card_2 ? "total_card_disappear" : ""}`}>
                <div className="perfil_card" onClick={()=>{setOpen_perfil_card(true)}}>
                    <div className="foto_perfil"></div>
                    <ul className="ul_perfil_1">
                        <li>{t("about.front.t1")}</li>
                        <li>{t("about.front.t2")}</li>
                    </ul>
                    <ul className="ul_perfil_2">
                        <li>{t("about.front.p1")}</li>
                    </ul>
                </div>
                <div className="card_backside" onClick={()=>{setOpen_perfil_card_2(true)}}>
                    <ul>
                        <li className="quim">{t("about.back.l1")}</li>
                        <li>{t("about.back.l2")}
                            <ul>
                                <li>{t("about.back.l2_1")}</li>
                                <ul>
                                    <li>{t("about.back.l2_1_1")}</li>
                                    <li>{t("about.back.l2_1_2")}</li>
                                    <li>{t("about.back.l2_1_3")}</li>
                                </ul>
                                <li>{t("about.back.l2_2")}</li>
                                <ul>
                                    <li>{t("about.back.l2_2_1")}</li>
                                    <li>{t("about.back.l2_2_2")}</li>
                                    <li>{t("about.back.l2_2_3")}</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={open_perfil_card ? "card_page card_page_click" : "card_page"}>
                <div className="close_card" onClick={()=>{setOpen_perfil_card(false); setOpen_perfil_card_2(false)}}><span className="material-symbols-outlined span_menu">Close</span></div>
                <ul>
                    <li>{t("about.card.l3")}</li>
                    <ul className='ul_page2'>
                        <li>{t("about.card.l3_1")}</li>
                        <li>{t("about.card.l3_2")}</li>
                    </ul>
                </ul>
                <div className="iconos_box">
                    {/* <p>{t("about.card.email")}</p> */}
                    <button onClick={cv_download}>Descargar CV</button>
                    <a rel='http://www.google.es' target="_blank" className="iconos icono_lin"></a>
                    <a rel="http://www.google.es" target="_blank" className="iconos icono_git"></a>
                </div>
            </div>
        </section>
    );
}

export default About;