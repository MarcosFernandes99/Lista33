// //Bora Começar
// // EXERCICIO 1
// let palavra : string = "Camisa"
// console.log(ContarVogais(palavra))
// function ContarVogais(palavraParametro : string): number{
//     let vogais : RegExp = /[aeiou]/ig
//     let quantidadeVogais : number = palavraParametro.match(vogais)
//     return quantidadeVogais.length
// }
// EXERCICIO 2
// EXERCICIO 3
var numero = "123456789";
console.log(OrganizarNumeros(numero));
function OrganizarNumeros(numeroParametro) {
    console.log(numeroParametro);
    var array = numeroParametro.split("");
    console.log(array);
    array.sort(function (a, b) { return parseInt(b) - parseInt(a); });
    return array.join("");
}
