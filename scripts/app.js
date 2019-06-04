mapboxgl.accessToken = 'pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw';
// Map-----------------------------------------------------------------------------------
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v10',
  // initial position [lon, lat] 
  center: [8.4120,49.0000],
  //3D orientation
  pitch : 50,
  bearing : -20,
  zoom: 12.7
});
/*
map.on('load', function () {
console.log('test1')

map.addSource("test", {
  type: 'geojson',
  data: 
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "title": "TEST"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.35883617401123,
            49.01023309040603
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#008000",
          "marker-size": "medium",
          "marker-symbol": "rail-metro",
          "title": "Stop-ID",
          "street_name": "TEST"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.377890586853027,
            49.00556010160893
          ]
        }
      }
    ]
  }
});

map.addLayer({
  id: 'points',
  source: "test",
  type: 'circle'
});
console.log('test2')
});
*/
var geojson = {
  
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Europaplatz",
          "condition": "Accessible",
          "lines": "S1, S2, 1, 2, 3, 6",
          "entry": "700",
          "exit": "500",
          "passengerTotal": "1200",
          "passengerPreSession": "-3",
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000031&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.394767045974731,
            49.00991641074167
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "title": "Herrenstrasse",
          "condition": "Accessible",
          "lines": "S1, S2, T1 ",
          "entry": "400",
          "exit": "300",
          "passengerTotal": "350",
          "passengerPreSession": "-15",
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000099&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.400356769561768,
            49.00974751409709
          ]
        }
      }
    ]
  
  
  };
  //var description = our_data.properties[''].description.join('\n');


    geojson.features.forEach(function(marker){
      var el = document.createElement('div');
      el.className = 'marker';

      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25})
      .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Condition:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/rotesDreieck.jpg" alt="redTriangle" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LINK</a> '))
      .addTo(map);
    });
  




/*
var geojson = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.4120,49.0000]
    }
  }
];

var myLayer = mapboxgl.featureLayer().setGeoJSON(geojson).addTo(map);
map.scrollWheelZoom.disable();
*/
/*
//Modal STATISTICS------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var statModal = document.getElementById("statisticsModal");

//Variables Changed
var statButton = document.getElementById("statisticsBtn");

//Variables changed
var statSpan = document.getElementsByClassName("statClose")[0];

//When the user clicks the button -> open the modal 
statButton.onclick = function() {
  statModal.style.display = "inline-block";
}

// When the user clicks on "x" -> close modal
statSpan.onclick = function() {
  statModal.style.display = "none";
}

// When the user clicks anywhere outside of either modal itll be closed
window.onclick = function(event) {
  if (event.target == abModal) {
    abModal.style.display = "none";
  }
  if (event.target == statModal) {
    statModal.style.display = "none";
  }
}
*/

  
//REQUEST----------------------------------------------------------------------------------------------------------------------------------------------


//REQUEST TILES 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw'
/*
const Http = new XMLHttpRequest();
const url = 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
} */




