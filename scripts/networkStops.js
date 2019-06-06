var geojson = {
  
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
         "negativ": "null",
         "positiv": 10,
          "title": "Europaplatz",
          "condition": "Accessible",
          "lines": "S1, S2, 1, 2, 3, 6",
          "entry": "700",
          "exit": "500",
          "passengerTotal": "980",
          "passengerPreSession": 3,
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
         // "negativ": "null",
          //"positiv": 0,
          "title": "Herrenstrasse",
          "condition": "Accessible",
          "lines": "S1, S2, T1 ",
          "entry": "400",
          "exit": "300",
          "passengerTotal": "350",
          "passengerPreSession": 15,
          "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000099&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            8.400356769561768,
            49.00974751409709
          ]
        }
      },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        //"positiv": 3,
        //"negativ": ,
        "title": "Marktplatz",
        "condition": "None",
        "lines": "S1, S2, T1",
        "entry": "200",
        "exit": "150",
        "passengerTotal": "175",
        "passengerPreSession": -13,
        "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000001&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.404841423034668,
          49.0095293550832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        //"positiv": 7,
        "title": "Kronenplatz",
        "condition": "Accessible",
        "lines": "S1, S2, T1",
        "entry": 450,
        "exit": 350,
        "passengerTotal": 400,
        "passengerPreSession": 3,
        "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000002&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.409991264343262,
          49.009247858168976
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#7e7e7e",
        //"positiv": 7,
        

        "title": "Durlacher Tor",
        "condition": "Limited",
        "lines": "S1, S2, T1",
        "entry": 200,
        "exit": 150,
        "passengerTotal": 175,
        "passengerPreSession": -13,
        "plan": "https://projekte.kvv-efa.de/sl3-alone/XSLT_DM_REQUEST?language=de&std3_suggestMacro=std3_suggest&std3_commonMacro=dm&std3_contractorMacro=&includeCompleteStopSeq=1&mergeDep=1&mode=direct&useRealtime=1&nameInfo_dm=7000001&type_dm=any&sessionID=0&requestID=0&itdLPxx_directRequest=1&coordOutputFormat=WGS84[dd.ddddd]"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          8.4182,
          49.0091
        ]
      }
    },
  ]
};

//var arr = $.map(geojson.features.properties.passengerPreSession, function(el) { return el });
console.log(arr)

var arr = Object.keys(geojson).map(function(k) { return obj[k] });
/*
for (var i = 0; i < geojson.features.length; i++) {
  var read = geojson.features[i].properties.passengerPreSession;
  console.log(read)
}

for (var i = 0; i < geojson.features.length; i++) {
  var read2 = geojson.features[i].properties.passengerPreSession;
  console.log(read2)
}

for (read > 0) {

  console.log('read bigger 0')
  geojson.features[i].properties.passengerPreSession(function(marker){
    var pos = document.createElement('div');
    pos.className = 'marker2';
  
      isPositive = false;
    new mapboxgl.Marker(pos)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25})
    .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/rotesDreieck.jpg" alt="rotesDreieck" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
    .addTo(map)
  });
  
//red
}

if (read2 = 0) {

  geojson.features.forEach(function(marker){
             
    var el = document.createElement('div');
    el.className = 'marker';
      
    isPositive = true;
    
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25})
    .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/greenTriangle.png" alt="greenTriangle" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
    .addTo(map)
    });
    //green

}
*/
  /*
  //var description = our_data.properties[''].description.join('\n');
  for (var i = 0; i < geojson.features.length; i++) {
    //var itemTitle = geojson.features[i].title;
   // var itemUrl = geojson.features[i].condition;
    var itemPositv = geojson.features[i].properties.positiv;
   // var itemNegativ = geojson.features[i].properties.negativ;
    //var itemPassengerPreSession = geojson.features[i].properties.passengerPreSession;

          console.log('positv: ' + itemPositv);

          var isPositive = false;
                      
          if (parseInt(itemPositv) > 5 ) {
            console.log('if1')
              
              geojson.features.forEach(function(marker){
             
              var el = document.createElement('div');
              el.className = 'marker';
                
              isPositive = true;
              
              new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25})
              .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/greenTriangle.png" alt="greenTriangle" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
              .addTo(map)
              });
              //green
            
            
            }

          else  {


              console.log('else')
              geojson.features.forEach(function(marker){
                var pos = document.createElement('div');
                pos.className = 'marker2';
              
                  isPositive = false;
                new mapboxgl.Marker(pos)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25})
                .setHTML('<h4>' + marker.properties.title + '</h4><p1>' + "Accessibility:\n" + marker.properties.condition + '\n' + '</p1><br><p2>' + "\nLines:\n" + marker.properties.lines + '</p2><br><p3>' + "Entry\n(P/h):\n" + marker.properties.entry + '</p3><br><p4>'+ "Exit\n(P/h):\n" + marker.properties.exit + '</p4><br><p5>'+ "Passenger\nFlow\n(P/h):\n" + marker.properties.passengerTotal + '</p5><br><p6>' + "Pre-Hour\n(%):\n" + marker.properties.passengerPreSession + '\n' + '<img src="images/rotesDreieck.jpg" alt="rotesDreieck" width="14px" height= "10px"></p6><br><p7>' + "Timetable:\n" + '</p7>' + '<a  href="' + marker.properties.plan +'">LIVE!</a><br><p8>' + "\nP/h = Passenger per hour\n" + '</p8>'))
                .addTo(map)
              });
              
          //red
              
            
          }

          if(isPositive == true)
          {
              //zeichen setzen auf gruen 
          }
          else{

          }
    
    //  If you really want to get crazy, you could use the itemUrl variable above to do a getJSON within a getJSON
          
  }
  
    */
    
    
