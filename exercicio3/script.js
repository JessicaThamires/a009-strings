

frase ="Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)

let verdeRosa = frase.replace("verde", "rosa")
console.log(verdeRosa)

let azulLaranja = frase.replace("azul", "laranja")
console.log(azulLaranja)

let temVerde = verdeRosa.includes("verde")
console.log(temVerde)

let temLaranja = azulLaranja.includes("laranja")
console.log(temLaranja)

minuscula = "Jorge tem uma casa verde e com portão azul, com os dizeres:"
maiuscula = "\"MAS NÃO DEIXE O GATO SAIR\""
console.log(minuscula + maiuscula)
