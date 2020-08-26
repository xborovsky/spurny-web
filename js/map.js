(function($) {
    var map = L.map('map').setView([50.351000, 14.475316], 16);
    
    L.tileLayer.provider('Esri.WorldStreetMap').addTo(map);

    L.marker([50.351000, 14.475316]).addTo(map)
        .bindPopup('Palackého 114<br />276 01  Mělník')
        .openPopup();
})(jQuery);