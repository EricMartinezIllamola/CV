// fetch("./assets/json/esp.json")
//     .then(response => response.json())
//     .then(respuesta => {
//         $("#Home").append($("<p></p>").text(respuesta.nombre));
//         $("#Home").append($("<p></p>").text(respuesta.edad));
//         $("#Home").append($("<p></p>").text(respuesta.email));
//     });



//abrir-cerrar dropdown (mobile)
// for (let i = 0; i < 2; i++) {
//     const li_dropdown = document.querySelector(".dropdown")[i];
//     const content_dropdown = document.querySelector(".content_dropdown")[i];

//     li_dropdown.addEventListener("click", () => {
//         content_dropdown.classList.toggle("mostrar_dropdown");
//     });
// }



//expand-collapse text
// for (i = 0; i < 2; i++) {
//     let collapse_button = document.getElementsByClassName("collapse_button")[i];
//     let collapse_content = document.getElementsByClassName("collapse_content")[i];
//     collapse_button.addEventListener("click", () => {
//         // collapse_button.classList.toggle("collapse_active");
//         collapse_content.classList.toggle("expand_content");
//     });
// }



//validar formulario

let NombreError = EmailError = MotivoError = MensajeError = true;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML = mensaje;
}

function validarNombre() {
    let nombre = document.formulario.nombre.value;
    if (nombre === "") {
        mostrarError("errorNombre", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorNombre", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            mostrarError("errorNombre", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorNombre", "");
            NombreError = false;
            localStorage.setItem("Nombre", nombre);
        }
    }
}

function validarEmail() {
    let email = document.formulario.email.value;
    if (email === "") {
        mostrarError("errorEmail", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorEmail", "")
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email) === false) {
            mostrarError("errorEmail", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorEmail", "");
            EmailError = false;
            localStorage.setItem("Email", email);
        }
    }
}

function validarMotivo() {
    let motivo = document.formulario.motivo.value;
    if (motivo === "") {
        mostrarError("errorMotivo", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorMotivo", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(motivo) === false) {
            mostrarError("errorMotivo", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorMotivo", "");
            NombreError = false;
            localStorage.setItem("Motivo", motivo);
        }
    }
}

function validarMensaje() {
    let mensaje = document.formulario.mensaje.value;
    if (mensaje === "") {
        mostrarError("errorMensaje", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorMensaje", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(mensaje) === false) {
            mostrarError("errorMensaje", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorMensaje", "");
            NombreError = false;
            localStorage.setItem("Mensaje", mensaje);
        }
    }
}