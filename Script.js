const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".resultado");
const muñeco = document.querySelector(".muñeco")
const texto = document.querySelector(".texto")
const copiar = document.querySelector(".btn-copiar");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    ocultar();
    mostrar();
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar(){
    ocultar();
    mostrar();
    const textoEncriptado = Desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function ocultar(){
    muñeco.classList.add("ocultar");
    texto.classList.add("ocultar");
}

function mostrar(){
    mensaje.classList.add("mostrar");
    copiar.classList.add("mostrar");
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}

function Desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("texto copiado")
}