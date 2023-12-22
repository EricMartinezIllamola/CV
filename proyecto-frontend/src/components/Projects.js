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
                        <Link to="/personal-portfolio/Project_3#Project_3">
                            <div className="project_card">
                                <div className="project_img project_img_3"></div>
                                <div className="project_content">
                                    <h2>{t("projects.t3")}</h2>
                                    <p>{t("projects.p3")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="https://nbviewer.org/github/EricMartinezIllamola/J2D23_Hackaton/blob/48114150cdc0d41967224d6b165528c787b2314d/Hackaton_00.ipynb" target="_blank">
                            <div className="project_card">
                                <div className="project_img project_img_4"></div>
                                <div className="project_content">
                                <h2>{t("projects.t4")}</h2>
                                <p>{t("projects.p4")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="https://ericmartinezillamola-llm-faqs.streamlit.app/" target="_blank">
                            <div className="project_card">
                                <div className="project_img project_img_5"></div>
                                <div className="project_content">
                                <h2>{t("projects.t5")}</h2>
                                <p>{t("projects.p5")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col'>
                        <Link to="https://ericmartinezillamola-llm-sql.streamlit.app/" target="_blank">
                            <div className="project_card">
                                <div className="project_img project_img_6"></div>
                                <div className="project_content">
                                <h2>{t("projects.t6")}</h2>
                                <p>{t("projects.p6")}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;