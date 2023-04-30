let titulo = document.querySelector("#titulo");
let CampoTexto = document.querySelector("#CampoTexto")
let btTrocarTexto = document.querySelector("#btTrocarTexto")

function alterarTexto(){
    let texto = String(CampoTexto.value);
    titulo.textContent = texto;
}


btTrocarTexto.onclick = function(){
    alterarTexto();
}