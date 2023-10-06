let num = [5, 8, 2, 9, 3]
console.log(`Está é a ordem original ${num}`)
num.push(1)
num.sort()
console.log(`Ele fica assim em ordem númerica ${num}`)
console.log(`O vertor tem  ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}

console.log(num)