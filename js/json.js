function testJson()
{
    var json = '{ "var1": "val1", "var2": "val2", "var3": "val3" }';
    let data = JSON.parse( json );
    console.log( data.var1 );
    let div = document.createElement( 'div' );
    div.innerText = data.var1;
    document.getElementById( 'header' ).append( div );
    document.getElementById( 'header' ).append( `<a href="https://google.com">PRUEBA HTML</a>` );
}