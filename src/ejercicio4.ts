// ejercicios 4 contamos los numeros entre 2 numeros ingresados sin importar su pocicion
let primerNumero: number = Number(prompt("ingrese un numero"));
let segundoNumero: number = Number(prompt("ingrese otro numero"));
let suma: number = 0;
if (primerNumero < segundoNumero) {
  for (
    let contador: number = primerNumero;
    contador <= segundoNumero;
    contador++
  ) {
    suma = suma + contador;
  }
} else {
  for (
    let contador2: number = segundoNumero;
    contador2 <= primerNumero;
    contador2++
  ) {
    suma = suma + contador2;
  }
}
console.log("el resultado es ", suma);
