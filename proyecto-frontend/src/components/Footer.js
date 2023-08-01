import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const [t, i18n] = useTranslation("index");

    return (
        <footer>
            <h3>{t("footer.p1")}</h3>
        </footer>
    );
}

export default Footer;