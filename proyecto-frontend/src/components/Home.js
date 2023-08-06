import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


function Home() {
    let navigate = useNavigate();
    const start_btn = () => {
        let path = '/CV/#Objetivos'; 
        navigate(path);
    };

    const [t, i18n] = useTranslation("index");

    return (
        <section id="home">
            <div className="intro_box">
                <div onClick={start_btn} className="btn_start"></div>
                <div className="intro">
                    <h1 className="intro_a" id="intro_1">{t("home.h1")}</h1>
                    <h3 className="intro_a" id="intro_2">{t("home.h3")}</h3>
                </div>
            </div>
        </section>
    );
}

export default Home;

