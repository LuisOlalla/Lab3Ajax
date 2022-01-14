$('#btnCargar').click(function() {

    var esperar = 2000;
    $.ajax({

        url: "contenido.html",
        beforeSend: function () {
            $('#contenido').text('Cargando...');

        },

        success: function(data) {
            setTimeout(function() {
                $('#contenido').html(data);
            }, esperar
            );
        }
    });
});
/*JQuery*/
$(document).ready(function(){
    /*boton ocultar*/
    $("#btnOcultar").click(function(){
        $(".pelicula-principal").hide(2000);
    });
    /*Texto*/
    $("#mapa").mouseleave(function(){
        $(".logotipo").animate({with: "50px"});
    });
});