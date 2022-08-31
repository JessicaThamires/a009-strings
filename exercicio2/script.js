


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString)

const semRemocaoEspaco =(`Sem remoção do espaço: ${minhaString}`)
const comRemocaoEpaco =(`Com a remoção do espaço em branco: ${minhaString.trim()}.`)
console.log(comRemocaoEpaco)

console.log ("Sem a remoção do espaço em branco são", semRemocaoEspaco.length, "caractéries.")
console.log("Com a remoção de espaço ficaram", comRemocaoEpaco.length, "caractéries")

trocarReplace = (minhaString.replace("________","sticioso"))
console.log(trocarReplace)
