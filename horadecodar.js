// Atividade 1 
function execAtividade1 () {

var nome_do_carro = "Fusca";

alert ("O nome do carro é: " + nome_do_carro); }

// Atividade 2 

function execAtividade2 () {
    var nome = prompt ("Qual o seu nome?");

alert ("Olá, " + nome + ".");}

//Atividade 3
function execAtividade3 () {
    
    var idade = prompt ("E qual é a sua idade?");

alert ("Olá, " + nome +"! \nVocê tem " + idade + " anos.");}

// Atividade 4 

function execAtividade4 () {

var baseRetangulo = parseInt(prompt ("Qual o valor da base do retângulo?"));
var alturaDoRetangulo = parseInt (prompt("E o valor da altura do retangulo?"));
var resultado = baseRetangulo * alturaDoRetangulo;

alert ("O resultado do retangulo é: " + resultado);}


// Atividade 5
function execAtividade5 () {

var lado1quadrado = parseInt(prompt ("Qual o valor de um dos lados do quadrado?"));
var resultado2 = lado1quadrado * lado1quadrado;

alert ("O resultado do quadrado é: " + resultado2);}

// Atividade 6
function execAtividade6 () {
var lado1losango = parseInt(prompt ("Qual o valor da diagonal maior do losango?"));
var lado2losango = parseInt(prompt ("E o valor da diagonal menor do losango?"));
var resultado3 = (lado1losango * lado2losango)/2;
alert ("O resultado do losango é: " + resultado3); }


// Atividade 7
function execAtividade7 () {

var basemaiortarpezio = parseInt(prompt ("Qual o valor da base maior do trapézio?"));
var basemenortrapezio = parseInt(prompt ("E o valor da base menor do trapézio?"));
var alturatrapezio = parseInt(prompt ("E o valor da altura do trapézio?"));
var resultado4 = ((basemaiortarpezio + basemenortrapezio) * alturatrapezio) /2;

alert ("O resultado do trapézio é: " + resultado4); }

// Atividade 8
function execAtividade8 () {
var baseparalelo = parseInt(prompt ("Qual o valor da base do paralelogramo?"));
var alturaparalelo = parseInt(prompt ("E o valor da altura do paralelogramo?"));

var resultado5 = baseparalelo * alturaparalelo;

alert ("O resultado do paralelogramo é: " + resultado5); }

// Atividade 9
function execAtividade9 () {
var basetriagulo = parseInt(prompt ("Qual o valor da base do triângulo?"));
var alturatriângulo = parseInt(prompt ("E o valor da altura do triângulo?"));

var resultado6 = (basetriagulo * alturatriângulo) /2;

alert ("O resultado do triangulo é: " + resultado6); }

// Atividade 10
function execAtividade10 () {

var raiocirculo = parseInt(prompt ("Qual o valor do raio do círculo?"));

var resultado7 = Math.PI * Math.pow(raiocirculo, 2);

alert ("O resultado do círculo é: " + resultado7.toFixed(2));}


