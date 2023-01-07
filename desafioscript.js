// JavaScript source code


function clickbotonEncriptado() {
    var botonEncriptado = document.getElementsByClassName("Bonton-encriptado")[0];
    botonEncriptado.addEventListener("click", cambiarTexto);

    var botonDesencriptado = document.getElementsByClassName("Bonton-desencriptado")[0];
    botonDesencriptado.addEventListener("click", cambiarTextoEncriptado);

    var botonCopy = document.getElementsByClassName("copy")[0];
    botonCopy.addEventListener("click", copyToClipboard)


    
}


function eliminarAcentos(escritura) {
    return escritura.normalize("NFD").replace(/[\u0300-\u036f]/g, " ");
}

function eliminarCaracteresEspeciales(escritura) {
    return escritura.replace(/[^a-zA-Z0-9]/g, " ");
}

function cambiarTexto() {
    var textareaOrigen = document.getElementsByClassName("escritura")[0];
    var escritura = textareaOrigen.value.toLowerCase();
    escritura = eliminarAcentos(escritura);
    escritura = eliminarCaracteresEspeciales(escritura);

    escritura = escritura.replace(/[e]/g, "enter");
    escritura = escritura.replace(/[i]/g, "imes");
    escritura = escritura.replace(/[a]/g, "ai");
    escritura = escritura.replace(/[o]/g, "ober");
    escritura = escritura.replace(/[u]/g, "ufat");


    pasarTextoEncriptado(escritura);
    textareaOrigen.value = ""
    desabilitarBotonEncriptaryImagen();
}

function pasarTextoEncriptado(escritura) {
    var textareaDestino = document.getElementsByClassName("escritura-encriptada")[0];
    textareaDestino.value = escritura.replace(/\s/g, " ");
}




function cambiarTextoEncriptado() {
       var textareaEncriptada = document.getElementsByClassName("escritura-encriptada")[0];
       var escrituraEncriptada = textareaEncriptada.value;

        escrituraEncriptada = escrituraEncriptada.replace(/enter/gi, "e");
        escrituraEncriptada = escrituraEncriptada.replace(/imes/gi, "i");
        escrituraEncriptada = escrituraEncriptada.replace(/ai/gi, "a");
        escrituraEncriptada = escrituraEncriptada.replace(/ober/gi, "o");
        escrituraEncriptada = escrituraEncriptada.replace(/ufat/gi, "u");
    

        textareaEncriptada.value = escrituraEncriptada;

   


}



function desabilitarBotonEncriptaryImagen() {
    var botonEncriptado = document.getElementsByClassName("Bonton-encriptado")[0];
    var textareaOrigen = document.getElementsByClassName("escritura")[0]

    botonEncriptado.disabled = true;
    textareaOrigen.disabled = true;



}

function habilitarTextareaOrigen() {
    var textareaOrigen = document.getElementsByClassName("escritura")[0]
    var botonEncriptado = document.getElementsByClassName("Bonton-encriptado")[0];
    botonEncriptado.disabled = false;
    textareaOrigen.disabled = false;


}


function copyToClipboard() {
    var copyText = document.getElementsByClassName("escritura-encriptada")[0];
    copyText.select();
    document.execCommand("copy");


    habilitarTextareaOrigen();

}






window.addEventListener("load", clickbotonEncriptado);
