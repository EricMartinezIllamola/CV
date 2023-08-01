import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
    const [t, i18n] = useTranslation("index");

    const [nombre_up, setNombre_up] = React.useState(false);
    const [email_up, setEmail_up] = React.useState(false);
    const [motivo_up, setMotivo_up] = React.useState(false);
    const [mensaje_up, setMensaje_up] = React.useState(false);

    function auto_grow() {
        let mensaje = document.getElementById("mensaje");
        mensaje.style.height = "0px";
        mensaje.style.height = (mensaje.scrollHeight) + "px";
        const form = document.getElementById("form_box");
        form.style.height = "0px";
        form.style.height = (mensaje.scrollHeight + 350) + "px";
    }

    return (
        <section id="Contactar">
            <div className="form_box" id="form_box">
                <h1>{t("contact.h1")}</h1>
                <form name="formulario" action="confirmation.php" method="post" onsubmit="return validation()">
                    <div className="input_box">
                        <input type="text" id="nombre" className="nombre" name="nombre" minlength="2" maxlength="30"
                            required pattern="[a-zA-Z\s]+" onkeyup="validarNombre()" onBlur={(e)=>{e.target.value == "" ? setNombre_up(false) : setNombre_up(true)}} />
                        <label for="nombre" className={nombre_up ? "label_up" : ""}>{t("contact.i1")}</label>
                        <div className="error" id="errorNombre"></div>
                    </div>
                    <div className="input_box">
                        <input type="text" id="email" className="email" name="email" onkeyup="validarEmail()" required
                            pattern="[a-zA-Z\s]+" onBlur={(e)=>{e.target.value == "" ? setEmail_up(false) : setEmail_up(true)}} />
                        <label for="email" className={email_up ? "label_up" : ""}>{t("contact.i2")}</label>
                        <div className="error" id="errorEmail"></div>
                    </div>
                    <div className="input_box">
                        <input type="text" id="motivo" className="motivo" name="motivo" minlength="2" maxlength="30"
                            required pattern="[a-zA-Z\s]+" onkeyup="validarMotivo()" onBlur={(e)=>{e.target.value == "" ? setMotivo_up(false) : setMotivo_up(true)}} />
                        <label for="motivo" className={motivo_up ? "label_up" : ""}>{t("contact.i3")}</label>
                        <div className="error" id="errorMotivo"></div>
                    </div>
                    <div className="input_box">
                        <textarea name="mensaje" id="mensaje" onInput = {() => {auto_grow(this)}} required
                            pattern="[a-zA-Z\s]+" onkeyup="validarMensaje()" onBlur={(e)=>{e.target.value == "" ? setMensaje_up(false) : setMensaje_up(true)}}></textarea>
                        <label for="mensaje" className={mensaje_up ? "label_up" : ""}>{t("contact.i4")}</label>
                        <div className="error" id="errorMensaje"></div>
                    </div>
                    <input type="submit" value={t("contact.btn")} id="enviar" />
                </form>
            </div>
        </section>
    );
}

export default Contact;