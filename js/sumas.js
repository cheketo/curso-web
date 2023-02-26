var numero1 = 3;
var numero2 = 1;
var numero3 = 10;
const numeroFijo = 23;

determinarSiUnNumeroEsMayorA2( numero1 );


/*

    =  -> Es para asignar valores a una variable
    == -> Es para comparar dos valores

*/


function determinarSiUnNumeroEsMayorA2( elNumero )
{
    if( elNumero > 2 ) // Determinar si la condición es verdadera o falsa
    {
        // Si es verdadera ejecuta este bloque de código
        alert( "El número " + elNumero + " es mayor a 2" );

        if( elNumero > 5 )
        {
            alert( "El número " + elNumero + " es mayor a 5" );    
        }
        
    }else{

        alert( "El número " + elNumero + " NO es mayor a 2" );

        if( elNumero == 2 )
        {
            alert( "El número " + elNumero + " ES IGUAL a 2" );
        }else{
            if( elNumero == 1 )
            {
                alert( "El número " + elNumero + " ES IGUAL a 1" );
            }else{
                if( elNumero < 1 )
                {
                    alert( "El número no es positivo" );
                }
            }
        }
    }

    if( condicionDeAprobación( elNumero ) )
    {
        alert( 'APROBÓ' );
    }

    alert( 'fin de la función' );
}

function condicionDeAprobación( nota )
{
    return nota >= 6;
}

// comparaciones para números:
numero1 < numero2;
numero1 > numero2;
numero1 >= numero2;
numero1 <= numero2;

// Para cualquier tipo de variables
numero1 == numero2; // "hola" == "chau";
numero1 != numero2;