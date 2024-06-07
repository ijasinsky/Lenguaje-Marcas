$(document).ready(function() {
    $('#toggle-comentarios').click(function() {
        $('#area-comentarios').toggle();
        $(this).text(function(i, text){
            return text === "Ocultar Comentarios" ? "Mostrar Comentarios" : "Ocultar Comentarios";
        });
    });

    $('#formulario-comentario').submit(function(event) {
        event.preventDefault();
        let nuevoComentarioTexto = $('#nuevo-comentario').val();
        if (nuevoComentarioTexto.trim() !== "") {
            let nuevoComentario = $('<div class="comentario"></div>').text(nuevoComentarioTexto);
            let btnEliminar = $('<span class="btn-eliminar"> Eliminar</span>');
            btnEliminar.click(function() {
                $(this).parent().remove();
            });
            nuevoComentario.append(btnEliminar);
            $('#lista-comentarios').append(nuevoComentario);
            $('#nuevo-comentario').val('');
        }
    });
});