//Bora Começar
var palavra = "Camisa";
console.log(ContarVogais(palavra));
function ContarVogais(palavraParametro) {
    var vogais = /[aeiou]/ig;
    var quantidadeVogais = palavraParametro.match(vogais);
    return quantidadeVogais.length;
}
