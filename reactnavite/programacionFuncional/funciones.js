
 ejecutarSumar = () =>{
   /*let valor1 = recuperarEntero("txtvalor1");
   let valor2 = recuperarEntero("txtvalor2");
   let resultado;
   console.log("valor 1>>>>"+valor1+" valor 2>>>"+valor2);
   resultado = sumar(valor1, valor2);
   console.log("Resultado: "+resultado);*/
   ejecutarOperacion(sumar);
}

/*ejecutarRestar = () =>{
   let valor1 = recuperarEntero("txtvalor1");
   let valor2 = recuperarEntero("txtvalor2");
   let resultado;
   console.log("valor 1>>>>"+valor1+" valor 2>>>"+valor2);
   resultado = restar(valor1, valor2);
   console.log("Resultado: "+resultado);
   ejecutarOperacion(restar);
} */

ejecutarOperacion = (operar) =>{
   let valor1 = recuperarEntero("txtvalor1");
   let valor2 = recuperarEntero("txtvalor2");
   let resultado;
   resultado = operar(valor1, valor2);
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


ejecutar = (fn) =>{
   console.log("Estoy ejecutando funciones");
   fn();
}

imprimir = () =>{
   console.log("Estoy imprimiendo");
}

saludar = () =>{
   alert("Aprendiendo programacion funcional");
}


testEjecutar = () =>{
   ejecutar(imprimir);
   ejecutar(saludar);
   ejecutar(() =>{
      alert("Funcion anonima");
   });
}