import React from 'react';
import { useTranslation } from 'react-i18next';

function HardSkills() {
    const [t, i18n] = useTranslation("index");

    return (
        <section id="HardSkills">
            <div className="container-fluid">
                <h1>{t("hard.h1")}</h1>
                <div className="row">
                    <div className="col-12 span">{t("hard.t1")}</div>
                    <div className="col-12 col-sm"><img className='img img_A' src={require('../img/powerbi.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_A' src={require('../img/machinelearning.webp')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_A' src={require('../img/python.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_A' src={require('../img/rstudio.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_A' src={require('../img/visualstudio.png')}></img></div>
                    <div className="col img"></div>
                    <div className="col img"></div>
                </div>
                <div className="row">
                    <div className="col-12 span">{t("hard.t2")}</div>
                    <div className="col-12 col-sm"><img className='img img_B1' src={require('../img/sqlserver.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_B2' src={require('../img/mysql.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_B3' src={require('../img/mongodb.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_B4' src={require('../img/neo4j.png')}></img></div>
                    <div className="col img"></div>
                    <div className="col img"></div>
                    <div className="col img"></div>
                    {/* <div className="col img"></div> */}
                </div>
                <div className="row">
                    <div className="col-12 span">{t("hard.t3")}</div>
                    <div className="col-12 col-sm"><img className='img img_C img_C1' src={require('../img/pentaho.PNG')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_C img_C2' src={require('../img/alteryxtrifacta.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_C img_C3' src={require('../img/collibra.png')}></img></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col-12 span">{t("hard.t4")}</div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/html5.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/css3.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/javascript2.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/react.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/bootstrap2.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/nodejs.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_D' src={require('../img/jquery.png')}></img></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col-12 span">{t("hard.t5")}</div>
                    <div className="col-12 col-sm"><img className='img img_E1' src={require('../img/apachehadoop.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_E2' src={require('../img/apachespark.png')}></img></div>
                    <div className="col-12 col-sm"><img className='img img_E3' src={require('../img/aws.png')}></img></div>
                    {/* <div className="col-12 col-sm"><img className='img img_E4' src={require('../img/azure.png')}></img></div> */}
                    <div className="col-12 col-sm"><img className='img img_E5' src={require('../img/github.png')}></img></div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </section>
    );
}

export default HardSkills;