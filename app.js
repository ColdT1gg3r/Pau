//Hola

//Comentario de una sola línea
var nombre = 'Paola';
console.log(nombre);
console.log(typeof(nombre));

var edad = 23;
console.log(edad);
console.log(typeof(edad));

edad ='Treinta y siete';
console.log(edad);
console.log(typeof(edad));

var salario = 19000000.99;
console.log(salario);
console.log(typeof(salario));

var profesional = true;
console.log(profesional);
console.log(typeof(profesional));

var profesion;
console.log(profesion);

var cargo = null;
console.log(cargo);
console.log(typeof(cargo));

// Operadores matemáticos

var edadAlberto, edadRicardo, edadPaola, edadXiommara;
var totalEdades, fechaAlberto, fechaRicardo, fechaPaola, fechaXiomara;
var diferenciaEdad;
var presente;
var miEdad;
var miAño;

edadAlberto = 50;
edadRicardo = 45;
edadPaola = 37;
edadXiommara = 40;
presente = 2024;
miEdad = 23;

//1-Hallar la diferencia de edades ebtre Alberto y Xiomara
diferenciaEdad = edadAlberto - edadXiommara;
console.log('La diferencia de edad entre Alberto y Xiomara es: ');
console.log(diferenciaEdad);

//2-Hallar la diferencia de edades ebtre Ricardo y Paola
diferenciaEdad = edadRicardo - edadPaola;
console.log('La diferencia de edad entre Ricardo y Paola es: ');
console.log(diferenciaEdad);

//3-Hallar los años de nacimiento de cada uno
fechaAlberto = presente - edadAlberto;
fechaRicardo = presente - edadRicardo
fechaPaola = presente - edadPaola;
fechaXiomara = presente - edadXiommara
console.log('Los años de nacimiento de cada uno: ');
console.log(fechaAlberto, fechaRicardo, fechaPaola, fechaXiomara);

//4-Hallar la diferencia de mi edad con la de Paola
diferenciaEdad = edadPaola - miEdad;
console.log('La diferencia de edad entre Paola y mi edad es: ');
console.log(diferenciaEdad);

//5-Hallar el año de mi nacimiento
miAño = presente - miEdad;
console.log('Mi año de nacimiento es: ');
console.log(miAño);

//6-Totalizar todas las edades
totalEdades = edadAlberto + edadPaola + edadRicardo + edadXiommara + miEdad;
console.log('La edad total de todos es: ')
console.log(totalEdades)

var num1 = 10;
var num2 = 50;
var multiplicación = (9 * num1);
var division = (num2 / num1);
var ecuacion = (5 + 10 * 3);
var porcentaje = (num2 % 9 * num1);
var sumaDivision = (num2 + num1 / 8 + 2);
var divisionCompleja = ((num2 + num1) / (8+2));

console.log(multiplicación, division, ecuacion, porcentaje, sumaDivision, divisionCompleja)

/*Operadores lógicos = comparación
mayor que >
menor que <
mayor igual >=
menor igual <=
igual ==
*/

*/HOLA*/
var num1 = 8;
var num2 = 100;

//1.Compara si 8 es menor a 100
var compara = num1 < num2;
console.log('¿8 es menor a 100?: ' + compara);

//2. Compara si 8 es menor a 100
var compara = num1 >= num2;
console.log('¿8 es mayor o igual a 100?: ' + compara);

//3. Compara si 100 es menor a 0
var compara = num2 < 0;
console.log('¿100 es menor a 0?: ' + compara);

//4. Compara si 100 es igual a 100
var compara = num2 == num2;
console.log('¿100 es igual a 100 ?: ' + compara);

//5. Compara si 1 es menor a 8
var compara = 1 < num1;
console.log('¿1 es menor a 8 ?: ' + compara);


/*Operadores unarios

++ incremento
-- decremento

*/

edadPaola++;
console.log('La nueva edad de Paola es: ' + edadPaola);

edadRicardo--;
console.log('La nueva edad de Ricardo es: ' + edadRicardo);

console.log(edadAlberto++);

console.log(edadAlberto);
console.log(++edadAlberto);
console.log(--edadXiommara);

/*Operadores de asiganación 

+=, -=, *=, /=, %=

*/ 

var a = 15;
var b = 5;

a = a + b;
console.log(a);

//Asigna el valor de la variable "a"
//tomando su valor actual y sumando "b"

a += b;
console.log(a);
