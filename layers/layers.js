var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pohodnikapotjulijana_1 = new ol.format.GeoJSON();
var features_Pohodnikapotjulijana_1 = format_Pohodnikapotjulijana_1.readFeatures(json_Pohodnikapotjulijana_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pohodnikapotjulijana_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pohodnikapotjulijana_1.addFeatures(features_Pohodnikapotjulijana_1);
var lyr_Pohodnikapotjulijana_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pohodnikapotjulijana_1, 
                style: style_Pohodnikapotjulijana_1,
                popuplayertitle: "Pohodniškapotjulijana",
                interactive: true,
                    title: '<img src="styles/legend/Pohodnikapotjulijana_1.png" /> Pohodniškapotjulijana'
                });
var format_Kulturnadediina_2 = new ol.format.GeoJSON();
var features_Kulturnadediina_2 = format_Kulturnadediina_2.readFeatures(json_Kulturnadediina_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturnadediina_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturnadediina_2.addFeatures(features_Kulturnadediina_2);
var lyr_Kulturnadediina_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kulturnadediina_2, 
                style: style_Kulturnadediina_2,
                popuplayertitle: "Kulturnadediščina",
                interactive: true,
    title: 'Kulturnadediščina<br />\
    <img src="styles/legend/Kulturnadediina_2_0.png" /> arheološka najdišča<br />\
    <img src="styles/legend/Kulturnadediina_2_1.png" /> drugi objekti in naprave<br />\
    <img src="styles/legend/Kulturnadediina_2_2.png" /> kulturna krajina<br />\
    <img src="styles/legend/Kulturnadediina_2_3.png" /> naselja in njihovi deli<br />\
    <img src="styles/legend/Kulturnadediina_2_4.png" /> ostalo<br />\
    <img src="styles/legend/Kulturnadediina_2_5.png" /> parki in vrtovi<br />\
    <img src="styles/legend/Kulturnadediina_2_6.png" /> spominski objekti in kraji<br />\
    <img src="styles/legend/Kulturnadediina_2_7.png" /> stavbe<br />\
    <img src="styles/legend/Kulturnadediina_2_8.png" /> stavbe s parki ali z vrtovi<br />\
    <img src="styles/legend/Kulturnadediina_2_9.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Pohodnikapotjulijana_1.setVisible(true);lyr_Kulturnadediina_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pohodnikapotjulijana_1,lyr_Kulturnadediina_2];
lyr_Pohodnikapotjulijana_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Kulturnadediina_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESD': 'ESD', 'EID': 'EID', 'IME': 'ime enote', 'SINONIMI': 'sinonimi', 'OPIS': 'opis', 'ZVRST': 'zvrst', 'TIP': 'tip', 'GESLA': 'tipološka gesla', 'DATACIJA': 'datacija', 'AVTORJI': 'avtorji', 'LOKACIJAOPIS': 'opis lokacije', 'OBCINA': 'obcina', 'ZAVOD': 'zavod', 'USMERITVE': 'usmeritve', 'STATUS': 'status', 'PREDPIS': 'predpis', 'PREDPISHTTP': 'PREDPISHTTP', 'VELJAVNOST': 'VELJAVNOST', 'FOTOAVTOR': 'FOTOAVTOR', 'FOTODATOTEKA': 'FOTODATOTEKA', 'POVEZAVA1': 'POVEZAVA1', 'SPOMENIK': 'SPOMENIK', 'OBCINAID': 'OBCINAID', 'QR': 'QR', 'X': 'X', 'Y': 'Y', 'PHOTOURL': 'PHOTOURL', });
lyr_Pohodnikapotjulijana_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Kulturnadediina_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESD': 'TextEdit', 'EID': 'TextEdit', 'IME': 'TextEdit', 'SINONIMI': 'TextEdit', 'OPIS': 'TextEdit', 'ZVRST': 'TextEdit', 'TIP': 'TextEdit', 'GESLA': 'TextEdit', 'DATACIJA': 'TextEdit', 'AVTORJI': 'TextEdit', 'LOKACIJAOPIS': 'TextEdit', 'OBCINA': 'TextEdit', 'ZAVOD': 'TextEdit', 'USMERITVE': 'TextEdit', 'STATUS': 'TextEdit', 'PREDPIS': 'TextEdit', 'PREDPISHTTP': 'TextEdit', 'VELJAVNOST': 'DateTime', 'FOTOAVTOR': 'TextEdit', 'FOTODATOTEKA': 'TextEdit', 'POVEZAVA1': 'TextEdit', 'SPOMENIK': 'TextEdit', 'OBCINAID': 'TextEdit', 'QR': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'PHOTOURL': 'TextEdit', });
lyr_Pohodnikapotjulijana_1.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Kulturnadediina_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'ESD': 'hidden field', 'EID': 'header label - always visible', 'IME': 'header label - always visible', 'SINONIMI': 'header label - always visible', 'OPIS': 'header label - always visible', 'ZVRST': 'header label - always visible', 'TIP': 'hidden field', 'GESLA': 'header label - always visible', 'DATACIJA': 'header label - always visible', 'AVTORJI': 'header label - always visible', 'LOKACIJAOPIS': 'header label - always visible', 'OBCINA': 'header label - always visible', 'ZAVOD': 'hidden field', 'USMERITVE': 'hidden field', 'STATUS': 'hidden field', 'PREDPIS': 'hidden field', 'PREDPISHTTP': 'hidden field', 'VELJAVNOST': 'hidden field', 'FOTOAVTOR': 'hidden field', 'FOTODATOTEKA': 'hidden field', 'POVEZAVA1': 'hidden field', 'SPOMENIK': 'hidden field', 'OBCINAID': 'hidden field', 'QR': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'PHOTOURL': 'hidden field', });
lyr_Kulturnadediina_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});