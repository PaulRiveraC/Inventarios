/* recuperarTexto = function(idComponente){
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente;
} */

    //ARRROW FUNTION
recuperarTexto = (idComponente) => {
    let componente = document.getElementById(idComponente);
    let valorComponente = componente.value;
    return valorComponente;
}

recuperarEntero = (idComponente) => {
    let valor = recuperarTexto(idComponente);
    valor = parseInt(valor);
    return valor;
}
recuperarFloat = (idComponente) => {
    let valor = recuperarTexto(idComponente);
    valor = parseFloat(valor);
    return valor;
}