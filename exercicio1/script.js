console.log ("Olá mundo!")
const nome = prompt ("Qual o seu nome?")

let idade = Number (prompt ("Qual a sua idade?"))


console.log (typeof idade, idade)
console.log (typeof nome ,nome)
// desta forma foram apresentados uma linha de texto e outra de numero
console.log (`Olá ${nome}, você tem ${idade}, anos.`)
