import React from 'react';
import { useTranslation } from 'react-i18next';

function HardSkills() {
    const [t, i18n] = useTranslation("index");

    return (
        <section id="HardSkills">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>{t("hard.h1")}</h1>
                        </div>
                        <div className="col-12 span">{t("hard.t1")}</div>
                        <div className="col-12 col-sm img img_A1"></div>
                        <div className="col-12 col-sm img img_A2"></div>
                        <div className="col-12 col-sm img img_A3"></div>
                        <div className="col-12 col-sm img img_A4"></div>
                        <div className="col-12 col-sm img img_A5"></div>
                        <div className="col img"></div>
                        <div className="col img"></div>
                        <div className="col img"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 span">{t("hard.t2")}</div>
                        <div className="col-12 col-sm img img_B1"></div>
                        <div className="col-12 col-sm img img_B2"></div>
                        <div className="col-12 col-sm img img_B3"></div>
                        <div className="col-12 col-sm img img_B4"></div>
                        <div className="col img"></div>
                        <div className="col img"></div>
                        <div className="col img"></div>
                        <div className="col img"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 span">{t("hard.t3")}</div>
                        <div className="col-12 col-sm img img_C1"></div>
                        <div className="col-12 col-sm img img_C2"></div>
                        <div className="col-12 col-sm img img_C3"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 span">{t("hard.t4")}</div>
                        <div className="col-12 col-sm img img_D1"></div>
                        <div className="col-12 col-sm img img_D2"></div>
                        <div className="col-12 col-sm img img_D3"></div>
                        <div className="col-12 col-sm img img_D4"></div>
                        <div className="col-12 col-sm img img_D5"></div>
                        <div className="col-12 col-sm img img_D6"></div>
                        <div className="col-12 col-sm img img_D7"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col-12 span">{t("hard.t5")}</div>
                        <div className="col-12 col-sm img img_E1"></div>
                        <div className="col-12 col-sm img img_E2"></div>
                        <div className="col-12 col-sm img img_E3"></div>
                        <div className="col-12 col-sm img img_E4"></div>
                        <div className="col-12 col-sm img img_E5"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                </div>
            </section>
    );
}

export default HardSkills;