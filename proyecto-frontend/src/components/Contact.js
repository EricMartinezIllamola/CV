import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
    nombre: yup.string().min(2).max(30).required(),
    email: yup.string().email().required(),
    motivo: yup.string().min(2).max(70).required(),
    mensaje: yup.string().required()
})

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

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const sendEmail = (data, e) => {
        e.preventDefault();

        emailjs.sendForm('service_fbbp8js', 'template_ivpe2dr', e.target, 'arVXXxhjsKGel8GZf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };


    return (
        <section id="Contactar">
            <div className="form_box" id="form_box">
                <h1>{t("contact.h1")}</h1>
                <form name="formulario" onSubmit={handleSubmit(sendEmail)}>
                    <div className="input_box">
                        <input type="text" id="nombre" className="nombre" name="nombre" {...register("nombre")} onBlur={(e) => { e.target.value === "" ? setNombre_up(false) : setNombre_up(true) }} />
                        <label for="nombre" className={nombre_up ? "label_up" : ""}>{t("contact.i1")}</label>
                        <p className='error'> {errors.nombre?.message} </p>
                    </div>
                    <div className="input_box">
                        <input type="text" id="email" className="email" name="email" {...register("email")} onBlur={(e) => { e.target.value === "" ? setEmail_up(false) : setEmail_up(true) }} />
                        <label for="email" className={email_up ? "label_up" : ""}>{t("contact.i2")}</label>
                        <p className='error'> {errors.email?.message} </p>
                    </div>
                    <div className="input_box">
                        <input type="text" id="motivo" className="motivo" name="motivo" {...register("motivo")} onBlur={(e) => { e.target.value === "" ? setMotivo_up(false) : setMotivo_up(true) }} />
                        <label for="motivo" className={motivo_up ? "label_up" : ""}>{t("contact.i3")}</label>
                        <p className='error'> {errors.motivo?.message} </p>
                    </div>
                    <div className="input_box">
                        <textarea name="mensaje" id="mensaje" {...register("mensaje")} onInput={() => { auto_grow(this) }} onBlur={(e) => { e.target.value === "" ? setMensaje_up(false) : setMensaje_up(true) }} ></textarea>
                        <label for="mensaje" className={mensaje_up ? "label_up" : ""}>{t("contact.i4")}</label>
                        <p className='error'> {errors.mensaje?.message} </p>
                    </div>
                    <input type="submit" value={t("contact.btn")} id="enviar" />
                </form>
            </div>
        </section>
    );
}

export default Contact;