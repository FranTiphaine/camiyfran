/*
Ejemplos de 
tipos de datos 
en JavaScript

//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objecto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(typeof objecto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arreglo en JavaScript
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//Cadena vacia (empty string)
var z = '';
console.log(z);
console.log(typeof z);
*/

/* Concatenación de cadenas

var nombre = "Francisco";
var apellido = "Tiphaine";

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "Carlos" + ' ' + "Lara";
console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);

var x = nombre + (2 + 4);
console.log(x);

var x = 2 + 4 +nombre;
console.log(x);
*/

// let y const
/*
let nombre;
nombre = "Camila";
console.log(nombre);

//Const: sirve para definir variables que ya no vamos a modificar
const apellido = "Posbeyikian";
console.log(apellido);
*/

//Buenas practicas para definir variables
/*
let nombreCompleto = "Francisco Tiphaine";
console.log( nombreCompleto);

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);
*/
//Reglas para definir una variable
/*
let nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
*/
//variable definida incorrecta
// let 1nombreCompleto;

// OPERADORES + - * / % **
/*
let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicacion: " + z);

z = a / b;
console.log("Resultado de la division: " + z);

z = a % b;
console.log("Residuo de la division: " + z);

z = a ** b;
console.log("Resultado del operador exponente: " + z);
*/

//Incremento
/*
let a = 3, b = 2;
//Pre-Incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);
//Pre-Incremento (el operador ++ despues de la variable)z
z = b++;
console.log(b);
console.log(z);
//Decremento
//Pre-decremento (el operador -- antes de la variable)
z = --a;
console.log(a);
console.log(z);
//Pre-decremento (el operador -- despues de la variable)z
z = b--;
console.log(b);
console.log(z);
*/

/*
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / d;
console.log(z);
*/

//Operadores de Asignacion
/*
let a = 1, b = 2;

a += 3; // a = a + 3
console.log(a); //4

a -= 2; //a = a - 2
console.log(a); //2

b *= 2; // b = b * 2
console.log(b); //4

b /= 2; // b = b / 2
console.log(b); //2

b **= 3;
console.log(b); //8

b %= 2;
console.log(b); //0
*/

//Operadorores de comparacion
/*
let a = 3, b = 2, c = "3";

let z = a == c; //se revisa el valor sin importar el tipo
console.log(z); //false

z = a === c; //estricto: revisa si los valores son iguales pero tambien los tipos
console.log(z); //false

let x = a != b; //se revisa el valor sin importar el tipo
console.log(x);//true

x = a != c; //se revisa el valor sin importar el tipo
console.log(x);//false

x = a !== c; //estricto: revisa si los valores son iguales pero tambien los tipos
console.log(x);//true
 */

//Operadores Relacionales < > <= >= 
/*
let a = 3, b = 2, c = "3";

let z = a < b;
console.log(z);

z = a <= c;
console.log(z);

 */
//Numero par
/*
let a = 9;

if (a % 2 == 0) {
    console.log("Es un numero par");
} else {
    console.log("Es un numero impar");
};
 */
//Ejercicio 1

let nombre = prompt('Ingrese aqui su nombre:', '');
let distanciaTrayecto = prompt('Ingrese aqui la distancia a recorrer:', '');

distanciaTrayecto= parseInt(distanciaTrayecto);

if ((distanciaTrayecto > 0) && (distanciaTrayecto <= 1000)){
    document.write(nombre, ' de acuerdo a la distancia a recorrer de ', distanciaTrayecto, ' metros puedes llegar a tu destino a pie.')
} else if ((distanciaTrayecto >1000) && (distanciaTrayecto <= 10000)) {
    document.write(nombre, ' de acuerdo a la distancia a recorrer de ', distanciaTrayecto, ' metros, la mejor forma de llegar a tu destino es en bicicleta.')
}else if ((distanciaTrayecto >10000) && (distanciaTrayecto <= 30000)) {
    document.write(nombre, ' de acuerdo a la distancia a recorrer de ', distanciaTrayecto, ' metros, la mejor forma de llegar a tu destino es en colectivo.')
} else if ((distanciaTrayecto >30000) && (distanciaTrayecto <= 100000)) {
    document.write(nombre, ' de acuerdo a la distancia a recorrer de ', distanciaTrayecto, ' metros, la mejor forma de llegar a tu destino es en auto.')
} else if (distanciaTrayecto >100000) {
    document.write(nombre, ' de acuerdo a la distancia a recorrer de ', distanciaTrayecto, ' metros, la mejor forma de llegar a tu destino es en avion.')
} else if (distanciaTrayecto <=0){
    document.write(' El dato ', distanciaTrayecto, ' no es un dato valido.')
};

//Ejercicio 2

let numero1, numero2, numero3, numero4, numero5;

numero1 = prompt('Ingrese un numero:', '');
numero2 = prompt('Ingrese otro numero:', '');
numero3 = prompt('Ingrese otro numero:', '');
numero4 = prompt('Ingrese otro numero:', '');
numero5 = prompt('Ingrese otro numero:', '');


console.log(Math.max(numero1, numero2, numero3, numero4, numero5))

