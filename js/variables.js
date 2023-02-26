/*

Una variable sirve para:
- Definir un valor de forma temporal

Las variables se almacenan en memoria RAM

Las variables pueden cambiar de valor

Hay distintos tipo de variables
- Para números
- Para texto (o string)
- Para otras variables
- etc...

*/

// Un comentario de una sola línea

/* Un comentario
de
muchas 
líneas */


var a = "valor de la variable";
var b;
var c = 4;
var d;
var e = "más texto";
var booleano = true;

a = "otro texto";
a = concatenarTexto( a, e ); // "otro texto más texto"
b = a.length; // Es para sacar la cantidad de caracteres que tiene a
d = multiplicarDosNumeros( b, c );

noDevuelveNada();

function concatenarTexto( texto1, texto2 ) // concatena 2 varibales de texto
{
    return texto1 + ' ' + texto2;
}

function multiplicarDosNumeros( numero1, numero2 )
{
    return numero1 * numero2;
}

function noDevuelveNada()
{
    alert( 'Hola! Soy una función que no devuelve nada! Pero muestro los resultados. a:' + a + ', b:' + b + ', c:' + c + ', d:' + d + ', e:' + e);
}

function devolverUn2()
{
    return 2;
}

b = devolverUn2();

