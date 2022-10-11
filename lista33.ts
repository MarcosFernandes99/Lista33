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

let numero : string = "123456789"

console.log(OrganizarNumeros(numero))

function OrganizarNumeros(numeroParametro:string): number{
    console.log(numeroParametro)
    let array : string[]= numeroParametro.split("")
    console.log(array)

    array.sort((a, b) => parseInt(b) - parseInt(a)    

    return array.join("")
   
}


