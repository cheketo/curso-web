// ----------------------------------------- //
function irHastaElTacho( nombreDeUnaPersona )
{
    alert( nombreDeUnaPersona + ' fue hasta el tacho de basura' );
    // La persona se mueve hasta el tacho hasta el tacho
}

function cerrarBolsa( nombreDeUnaPersona )
{
    alert( nombreDeUnaPersona + ' cerró la bolsa de la basura' );
}

function sacarLaBasuraDelTacho( nombreDeUnaPersona )
{
    alert( nombreDeUnaPersona + ' sacó la basura del tacho de basura' );
}

function llevarLaBasuraHasta( nombrePersona, lugar )
{
    return nombrePersona + " llevó la basura hasta " + lugar;
}

// - Diseñar una solución a un problema
// - Crear órdenes y que luego se visualicen
// - Conjunto de instrucciones para solucionar un problema


// var lugarParaDejarLaBasura = 1; // "En el pasillo"

// Codeamos la solución
var sePuedeSacarLaBasura = false;
var cantidadDeBasuraEnKgEnElTacho = 3;
var capacidadTachoEnKg = 3;

function sacarLaBasura()
{
    // El contexto del problema
    var nombrePersona = document.getElementById( "nombre_persona" ).value;
    var lugarParaDejarLaBasura = document.getElementById( "lugares" ).value;

    // 1) Ir hasta el tacho
    irHastaElTacho( nombrePersona );

    // 2) Hay basura?
    if( cantidadDeBasuraEnKgEnElTacho >= capacidadTachoEnKg  )
    {
        sePuedeSacarLaBasura = true;
    }else{
        document.getElementById( "resultado" ).textContent = "El tacho no está lleno";
    }

    if( sePuedeSacarLaBasura )
    {
        // 3) Sacar la bolsa de basura
        var bolsaDeBasuraAbierta = true;
        cantidadDeBasuraEnKgEnElTacho = 0;
        sacarLaBasuraDelTacho( nombrePersona );

        // 4) Cerrar la basura
        bolsaDeBasuraAbierta = false;
        cerrarBolsa( nombrePersona );

        // 5) Llevar la basura hasta el lugar indicado
        var resultado = llevarLaBasuraHasta( nombrePersona, lugarParaDejarLaBasura );

        document.getElementById( "resultado" ).textContent = resultado;
    }
}





