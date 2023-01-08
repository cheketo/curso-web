window.onload = function() {
    // unaFuncionCualquiera();
};

function unaFuncionCualquiera()
{
    let personas = document.body.getElementsByTagName( 'h5' );
    let nombres = '';
    for (let persona of personas) {
        nombres = nombres + ' ' + persona.textContent;
    }
    let texto = document.getElementById( 'subtitulo1' ).textContent;
    document.getElementById( 'subtitulo1' ).textContent = texto + nombres;
    document.getElementsByTagName( 'button' )[0].style.display = 'none';
}