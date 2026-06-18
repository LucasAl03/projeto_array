//Declarar ARRAY
const numeros = [10, 50, 60, 300, 70, 900, 850]

//console.log(numeros[1])

numeros[2] = 124
numeros[0] = 24

/*console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])*/

/*for(i = 0; i < 5; i++){
    console.log(numeros[i])
}*/

for(i = 0; i < numeros.length; i++){
    //console.log(numeros[i])
}

//funções do array
//adicionar elemento ao final do array
numeros.push(1502)

//adicionar elemento no inicio do array
numeros.unshift(2408)

//o elemento

/*numeros.forEach((elem)=>{

})*/

//o elemento e o indice

numeros.forEach((elem, i)=>{
   console.log(i, elem)
})


//Função Splice CUIDADE AO USAR
//Removendo elementos a partir de uma posição
numeros.splice(3, 2)
console.log(`---------Depois do Splice----------`)

//adicionar elementos
numeros.splice(4, 0, 8888)

//substituir
numeros.splice(2, 1, 5555)

//a estrutura foreach tem melhor desempenho

let cont = 0
for (let elem of numeros){
    cont++
    console.log(cont, elem)
}



