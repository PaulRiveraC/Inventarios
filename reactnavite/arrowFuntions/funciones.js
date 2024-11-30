
 ejecutarSumar = () =>{
    let valor1 = recuperarEntero("txtvalor1");
   let valor2 = recuperarEntero("txtvalor2");
   let resultado;
   console.log("valor 1>>>>"+valor1+" valor 2>>>"+valor2);
   resultado = sumar(valor1, valor2);
   console.log("Resultado: "+resultado);

}

ejecutarRestar = () =>{
   let valor1 = recuperarFloat("txtvalor1");
   let valor2 = recuperarFloat("txtvalor2");
   let resultado;
   console.log("valor 1>>>>"+valor1+" valor 2>>>"+valor2);
   resultado = restar(valor1, valor2);
   console.log("Resultado: "+resultado);

} 

sumar = (valor1, valor2) =>{
   let resultado;
   resultado = valor1 + valor2;
   return resultado;
}

restar = (valor1, valor2) =>{
   let resultado;
   resultado = valor1 - valor2;
   return resultado;
}


