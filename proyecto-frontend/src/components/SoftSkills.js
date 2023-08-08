import React from 'react';
import { useTranslation } from 'react-i18next';

function SoftSkills() {
    const [t, i18n] = useTranslation("index");

    return (
        <section id="SoftSkills">
            <h1>{t("soft.h1")}</h1>
            <div class="accordion" id="accordionPanelsStayOpen">
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t("soft.t1")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <p>{t("soft.p1")}</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <p class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            {t("soft.t2")}
                        </button>
                    </p>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <p>{t("soft.p2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SoftSkills;