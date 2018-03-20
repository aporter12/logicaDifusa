$(function() {
    function ratingEnable() {
        $('#perdCabello').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#perdCabello').val(value);
          }
        });

        $('#caspa').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#caspa').val(value);
          }
        });
        $('#picazon').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#picazon').val(value);
          }
        });
        $('#enrojecimiento').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#enrojecimiento').val(value);
          }
        });
        $('#ronchas').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#ronchas').val(value);
          }
        });
        $('#postulas').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#postulas').val(value);
          }
        });
        $('#perdApetito').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#perdApetito').val(value);
          }
        });
        $('#dolorCabeza').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#dolorCabeza').val(value);
          }
        });
        $('#hinchazon').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#hinchazon').val(value);
          }
        });
        $('#pielSeca').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#pielSeca').val(value);
          }
        });
        $('#manchasRojas').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#manchasRojas').val(value);
          }
        });
        $('#fatiga').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#fatiga').val(value);
          }
        });
        $('#fiebre').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#fiebre').val(value);
          }
        });
        $('#espinillas').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#espinillas').val(value);
          }
        });
        $('#costras').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#costras').val(value);
          }
        });
        $('#dolorArticular').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#dolorArticular').val(value);
          }
        });
        $('#dolorGarganta').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#dolorGarganta').val(value);
          }
        });
        $('#pielHoyuelos').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#pielHoyuelos').val(value);
          }
        });
        $('#dolorHuesos').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#dolorHuesos').val(value);
          }
        });
        $('#calambres').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#calambres').val(value);
          }
        });
        $('#congNasal').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#congNasal').val(value);
          }
        });
        $('#erupciones').barrating('show', {
            theme: 'bars-1to10',
          onSelect: function(value, text, event) { //Para obtener el valor del select, es la única manera de asignar el valor de jQuery
              $('#rupciones').val(value);
          }
        });
    }

    ratingEnable();
});
