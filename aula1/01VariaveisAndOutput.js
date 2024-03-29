/*
* Mostrando strings no console 
*/

console.log("Hello 'world'")
// Strings
console.log('Hello "world"')
// Using grave accent
console.log(`'Hello' "world"`)

/*
* Variáveis / Constantes: (let, var, const)
* Não podemos usar palavras reservadas para variáveis
* Precisam ter nomes significativos
* Não podemos iniciar com números
* Não podemos colocar traços ou espaços
* Ultilizamos camelCase no JS
* Case-sensitive
* Utilizar let em vez de var
*/

let nomeTest // Variável declarada mas sem valor e retorna undefined
let nome = 'Smith' // Iniciando a variável com uma string
console.log('Hello', nome)

nome = 'bot' // Trocando valores
console.log('Hello', nome)

const nome2 = 'Bot'  // Constantes são imutáveis
console.log('nome2', nome2)

const x = 5
const y = 8
const sum = x + y
const sumTimesTwo = sum * 2
console.log(x, '+', y, '=', sum)
console.log('sumTimesTwo', sumTimesTwo)
console.log('typeof sumTimesTwo', typeof sumTimesTwo)
console.log('typeof nome2', nome2, '=', typeof nome2)


// Exercício - Idade e IMC:
const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const firstName = 'Neo'
const surname = 'Andarson'
const age = 30
const weight = 85
const height = 1.80

let bodyMassIndex = weight / (height * height)
let yearBorn = currentYear - age
let fullName = firstName + ', ' + surname

console.log(`${fullName} was born in ${yearBorn} and his BMI is ${Math.round(bodyMassIndex)}`)

// var x let
// var aceita atribuição de valores iniciando com var
// com let gera erro
var objeto = 'Carro'
var objeto = 'Casa'
