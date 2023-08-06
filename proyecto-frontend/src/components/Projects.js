import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Projects() {
    const [t, i18n] = useTranslation("index");

    let navigate = useNavigate();
    const nav_project_1 = () => {
        let path = '/CV/Project_1'; 
        navigate(path);
    };
    const nav_project_2 = () => {
        let path = '/CV/Project_2'; 
        navigate(path);
    };

    return (
        <section id="Experiencia">
            <h1>{t("projects.h1")}</h1>
            <div className="projects_container container-fluid">
                <div className='row'>
                    <div className='col'>
                        <div className="project_card" onClick={nav_project_1}>
                            <div className="project_img project_img_1"></div>
                            <div className="project_content">
                                <h2>{t("projects.t1")}</h2>
                                <p>{t("projects.p1")}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card" onClick={nav_project_2}>
                            <div className="project_img project_img_2"></div>
                            <div className="project_content">
                                <h2>{t("projects.t2")}</h2>
                                <p>{t("projects.p2")}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project 1</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project 1</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project 1</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;