import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

function Projects() {
    const [t, i18n] = useTranslation("index");

    return (
        <section id="Projects">
            <h1>{t("projects.h1")}</h1>
            <div className="projects_container container-fluid">
                <div className='row'>
                    <div className='col'>
                        <Link to="/personal-portfolio/Project_1#Project_1">
                            <div className="project_card">
                                <div className="project_img project_img_1"></div>
                                <div className="project_content">
                                    <h2>{t("projects.t1")}</h2>
                                    <p>{t("projects.p1")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="/personal-portfolio/Project_2#Project_2">
                            <div className="project_card">
                                <div className="project_img project_img_2"></div>
                                <div className="project_content">
                                    <h2>{t("projects.t2")}</h2>
                                    <p>{t("projects.p2")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project X</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project X</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="project_card">
                            <div className="project_img"></div>
                            <div className="project_content">
                                <h2>Project X</h2>
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