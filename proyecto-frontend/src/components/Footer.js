import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
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
        <footer>
            {/* <h3>{t("footer.p1")}</h3> */}
            <div className="iconos_box iconos_box_F container-fluid">
                <div className="row">
                    <div className="col-12 col-sm">
                        <p>{t("home.h1")}</p>
                    </div>
                    <div className="col-12 col-sm">
                        <p>{t("home.h3")}</p>
                    </div>
                    <div className="col-12 col-sm">
                        <button onClick={cv_download}>{t("about.card.pdf")}</button>
                    </div>
                    <div className="col-12 col-sm">
                        <a href='https://www.linkedin.com/in/ericmartinezillamola' target="_blank" className="iconos icono_lin"></a>
                    </div>
                    <div className="col-12 col-sm">
                        <a href="https://github.com/ericmartinezillamola" target="_blank" className="iconos icono_git"></a>
                    </div>
                    {/* <p>Èric Martínez</p>
                    <p>eric77711@gmail.com</p>
                    <button onClick={cv_download}>Descargar CV</button>
                    <a href='https://www.linkedin.com/in/ericmartinezillamola' target="_blank" className="iconos icono_lin"></a>
                    <a href="https://github.com/ericmartinezillamola" target="_blank" className="iconos icono_git"></a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;