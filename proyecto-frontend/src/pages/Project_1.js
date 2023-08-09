import React from 'react';
import { useTranslation } from 'react-i18next';

function Project_1() {
    const [t, i18n] = useTranslation("project_1");

    return (
        <section id="Project_1">
            <h1>{t("h1")}</h1>
            <h3>{t("t1")}</h3>
            <p>{t("p1")}</p>
            <h3>{t("t2")}</h3>
            <p>{t("p2")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_1">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_1" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t("a1.p")}
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
                <img className='img_P1_1' src={require('../img_1/num_docs_tematica_table.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i2")}</p>
                <img className='img_P1_2' src={require('../img_1/num_docs_tematica.png')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_2">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a2.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a2.c")}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo_2" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a3.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo_2" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a3.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i3")}</p>
                <img className='img_P1_3' src={require('../img_1/mining_inspect_acq.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i4")}</p>
                <img className='img_P1_4' src={require('../img_1/mining_inspect_earn.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_3">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_3" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a4.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_3" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a4.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i5")}</p>
                <img className='img_P1_5' src={require('../img_1/mining_head_fdata.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i6")}</p>
                <img className='img_P1_6' src={require('../img_1/grafico_frecuencias.png')}></img>
            </div>
            <p>{t("p3")}</p>
            <div className='text_png'>
                <p>{t("i7")}</p>
                <img className='img_P1_7' src={require('../img_1/word_cloud_acq.png')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i8")}</p>
                <img className='img_P1_8' src={require('../img_1/word_cloud_earn.png')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i9")}</p>
                <img className='img_P1_9' src={require('../img_1/word_cloud_total.png')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_4">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a5.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_4" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a5.c")}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo_4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a6.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo_4" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a6.c")}
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree_4" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a7.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseThree_4" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a7.c")}
                        </div>
                    </div>
                </div>
            </div>
            <p>{t("p4")}</p>
            <div className='text_png'>
                <p>{t("i10")}</p>
                <img className='img_P1_10' src={require('../img_1/mining_knn_pred.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_5">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_5" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t("a8.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_5" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a8.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i11")}</p>
                <img className='img_P1_11' src={require('../img_1/mining_confmat_knn.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_6">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t("a9.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_6" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a9.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i12")}</p>
                <img className='img_P1_12' src={require('../img_1/mining_sensitivity.PNG')}></img>
            </div>
            <div className='text_png'>
                <p>{t("i13")}</p>
                <img className='img_P1_13' src={require('../img_1/mining_specificity.PNG')}></img>
            </div>
            <p>{t("p5")}</p>
            <div class="accordion" id="accordionPanelsStayOpen_6">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_6" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a10.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_6" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a10.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i14")}</p>
                <img className='img_P1_14' src={require('../img_1/mining_knn_caret.PNG')}></img>
            </div>
            <div class="accordion" id="accordionPanelsStayOpen_7">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne_7" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        {t("a11.p")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne_7" class="accordion-collapse collapse">
                        <div class="accordion-body">
                        {t("a11.c")}
                        </div>
                    </div>
                </div>
            </div>
            <div className='text_png'>
                <p>{t("i15")}</p>
                <img className='img_P1_15' src={require('../img_1/mining_confmat_caret.PNG')}></img>
            </div>
            <p>{t("p6")}</p>
        </section>)
}

export default Project_1;