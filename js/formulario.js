
// function validaVacio(valor) {
//     valor = valor.replace("&nbsp;", "");
//     valor = valor == undefined ? "" : valor;
//     if (!valor || 0 === valor.trim().length) {
//         return true;
//         }
//     else {
//         return false;
//         }
//     }

// function validarfor(){

// var correo = document.getElementById("mail").value; 
// var nom = document.getElementsByName("name")[0].value;
// var webs = document.getElementsByName("webs")[0].value;
// var message = document.getElementsByName("message")[0].value;

// var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


// if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
//     alert("Error: La dirección de correo " + correo + " es incorrecta.");
//     return false;
// }

// if ( validaVacio(correo.value) || validaVacio(nom.value) || validaVacio(webs.value) || validaVacio(message.value)) {  //COMPRUEBA CAMPOS VACIOS
//     alert("Los campos no pueden quedar vacios");
//     return false;
    
// }
// return true;
// }

const nombre = document.getElementById("names");
const email = document.getElementById("email");
const websites = document.getElementById("websites");
const message = document.getElementById("messages");
const form = document.getElementById("contact_form");
const parrafo = document.getElementById("messageError");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length < 1 ){
        warnings += `<div class="alert alert-warning">Dijite un nombre valido</div>  `
        entrar = true
    }

    if(websites.value.length < 6 ){
        warnings += `<div class="alert alert-warning">Rellenar el espacio de website</div>  `
        entrar = true
    }

    if(!regexEmail.test(email.value)){
        warnings += `<div class="alert alert-warning">Dijite un email valido</div>  `
        entrar = true
    }
    
    if(message.value.length < 1 ){
        warnings += `<div class="alert alert-warning">Redacte un mensaje valido</div>  `
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = `<div class="alert alert-success">enviado</div>  `
    }
})