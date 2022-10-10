//Bora Começar

let palavra : string = "Camisa"

console.log(ContarVogais(palavra))

function ContarVogais(palavraParametro : string): number{
    let vogais : RegExp = /[aeiou]/ig

    let quantidadeVogais : number = palavraParametro.match(vogais)

    return quantidadeVogais.length

}