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

let palavra : string = "celular"

BuscarCaractereDoMeio(palavra)

function BuscarCaractereDoMeio(palavraParametro:string): void{
    let tamanho : number = palavraParametro.length
    console.log(tamanho)

    if(tamanho %2 == 0){
        console.log(palavraParametro[(tamanho/2) - 1], palavraParametro[(tamanho/2)])
    }
    else{
        console.log(palavraParametro[Math.floor(tamanho/2)])
    }
}


// EXERCICIO 3

// let numero : string = "123456789"

// console.log(OrganizarNumeros(numero))

// function OrganizarNumeros(numeroParametro:string): number{
//     console.log(numeroParametro)
//     let array : string[]= numeroParametro.split("")
//     console.log(array)

//     array.sort((a, b) => parseInt(b) - parseInt(a))

//     return parseInt(array.join(""))
   
// }


