/**filter: O método filter cria um novo array com todos os elementos que passam por um teste
 * (fornecido como uma função).Os elementos que não passam no teste são excluídos do novo array.
 * Este método não altera o array original.
Exemplo: */

const numeros = [1, 2, 3, 4, 5, 6];
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // O resultado será [2, 4, 6]

/**reduce: O método reduce executa uma função em cada elemento do array, 
 * resultando em um único valor acumulado. 
 * Ele é útil para somar todos os elementos de um array, concatenar strings,
 * ou realizar qualquer operação de acumulação.

Exemplo: */

const frutas = ["maçã", "banana", "laranja", "morango"];
const frutaEncontrada = frutas.find(fruta => fruta.length > 5);
console.log(frutaEncontrada); // O resultado será "laranja"


/** reduce: O método reduce executa uma função em cada elemento do array,
 * resultando em um único valor acumulado. Ele é útil para somar todos os elementos de um array,
 * concatenar strings, ou realizar qualquer operação de acumulação.

Exemplo: */

const numeros2 = [1, 2, 3, 4, 5];
const soma = numeros2.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // O resultado será 15
