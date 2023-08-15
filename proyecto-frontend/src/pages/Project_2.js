import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';

function Project_2() {
    const [t, i18n] = useTranslation("project_2");

    return (
        <section id="Project_2" className='Project_A'>
            <h1>{t("h1")}</h1>
            <p>{t("p1")}</p>
            <h3>{t("t1")}</h3>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_1">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a1.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_1" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a1.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i1")}</p>
                <img className='img_P2_1' src={require('../img_2/countries_head_total.PNG')}></img>
            </div>
            <p>{t("p4")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_2">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a2.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a2.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i2")}</p>
                <img className='img_P2_2' src={require('../img_2/countries_head_5.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i3")}</p>
                <img className='img_P2_3' src={require('../img_2/countries_sum_5.PNG')}></img>
            </div>
            <div className='text_png'>
            <p>{t("i4")}</p>
                <img className='img_P2_4' src={require('../img_2/country_A1.png')}></img>
            </div>
            <div className='text_png'>
            <p>{t("i5")}</p>
                <img className='img_P2_5' src={require('../img_2/country_B1.png')}></img>
            </div>
            <div className='text_png'>
            <p>{t("i6")}</p>
                <img className='img_P2_6' src={require('../img_2/country_C1.png')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_3">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a3.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_3" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a3.c")}
                        </div>
                    </div>
                </div>
            </div>
            <p>{t("p5")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_4">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a4.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_4" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a4.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i7")}</p>
                <img className='img_P2_7' src={require('../img_2/country_between.png')}></img>
            </div>
            <p>{t("p6")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_5">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_5" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a5.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_5" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a5.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i8")}</p>
                <img className='img_P2_8' src={require('../img_2/countries_agg_k5.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i9")}</p>
                <img className='img_P2_9' src={require('../img_2/countries_num_k5.PNG')}></img>
            </div>
            <p>{t("p7")}</p>
            <div className='text_png'>
                <p>{t("i10")}</p>
                <img className='img_P2_10' src={require('../img_2/country_A2.png')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i11")}</p>
                <img className='img_P2_11' src={require('../img_2/country_B2.png')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i12")}</p>
                <img className='img_P2_12' src={require('../img_2/country_C2.png')}></img>
            </div>
            <p>{t("p8")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_6">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a6.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_6" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a6.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i13")}</p>
                <img className='img_P2_13' src={require('../img_2/countries_agg_k2.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i14")}</p>
                <img className='img_P2_14' src={require('../img_2/countries_num_k2.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_7">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_7" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a7.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_7" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a7.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i15")}</p>
                <img className='img_P2_15' src={require('../img_2/countries_agg_k3.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i16")}</p>
                <img className='img_P2_16' src={require('../img_2/countries_num_k3.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_8">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_8" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a8.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_8" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a8.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i17")}</p>
                <img className='img_P2_17' src={require('../img_2/countries_agg_k4.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i18")}</p>
                <img className='img_P2_18' src={require('../img_2/countries_num_k4.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_9">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_9" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a9.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_9" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a9.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i19")}</p>
                <img className='img_P2_19' src={require('../img_2/countries_agg_k5.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i20")}</p>
                <img className='img_P2_20' src={require('../img_2/countries_num_k5.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_10">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_10" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <p>{t("a10.p")}</p>
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_10" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            {t("a10.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i21")}</p>
                <img className='img_P2_21' src={require('../img_2/country_silhouette.png')}></img>
            </div>
            <div className='proj_start'><Link to="/personal-portfolio/Project_2#Project_2"><span className="material-symbols-outlined">expand_less</span></Link></div>
        </section>)
}

export default Project_2;