recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    //para agregar en el arreglo
    frutas.push("banana");
    return frutas;
}

testRecuperar=()=>{
    let misFrutas = recuperar();
    let frutaPrimera = misFrutas[0];
    let otraFruta = misFrutas[1];
    console.log("1>>>>"+frutaPrimera);
    console.log("2>>>>"+otraFruta);
}

testRecuperarDes=()=>{
    let [frutaPrimera, frutaSegunda, frutaTercera] = recuperar();
    console.log(frutaPrimera);
    console.log(frutaSegunda);
    console.log(frutaTercera);
}