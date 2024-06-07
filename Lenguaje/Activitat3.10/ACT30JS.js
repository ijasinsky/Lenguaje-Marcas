$(function() {
    // Inicializar Datepickers
    $("#datepicker-inicio").datepicker({
        minDate: 0,
        dateFormat: "dd-mm-yy",
        onSelect: function(selectedDate) {
            $("#datepicker-fin").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#datepicker-fin").datepicker({
        minDate: 0,
        dateFormat: "dd-mm-yy"
    });

    // Inicializar Autocomplete
    var destinos = ["Barcelona", "Madrid", "París", "Roma", "Londres", "Berlín", "Ámsterdam", "Lisboa"];
    $("#destino").autocomplete({
        source: destinos
    });

    // Inicializar Slider
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 5000,
        values: [500, 3000],
        slide: function(event, ui) {
            $("#amount").text(ui.values[0] + "€ - " + ui.values[1] + "€");
        }
    });
    $("#amount").text($("#slider-range").slider("values", 0) + "€ - " + $("#slider-range").slider("values", 1) + "€");
});