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

//REQUEST TILES 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw'
/*
const Http = new XMLHttpRequest();
const url = 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
} */


// Layer on/off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#lin1').change(function() {
  if($(this).is(":checked")) {
      
    addLayerLine1();
      
  }else{
  
    map.removeSource('Line1')
    map.removeLayer('Line1')
  }
         
});

//Polyline layer 1----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerLine1() {
  console.log('hier');
 
  
    map.addLayer({
      "id": "Line1",
      "type": "line",
      "source": {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{

          //Collection-1 of data driven polylines

            "type": "Feature",
            "properties": {
              'color': '#cbcb00' //yellow
              },

              //Elements of Array that apply to middle force

            "geometry": {
              "type": "LineString",
              "coordinates": [
                [8.3680683, 48.9822555], //Oberreut Badenialplatz
                [8.3649731, 48.983463], //Wilhelm-Leuschner-Strasse
                [8.362264, 48.9858341], //Oberreut Zentrum
                [8.3636883, 48.9891466], //Albert-Braun-Str.
                [8.3689481, 48.9927476], //Hardecksiedlung
                [8.3724162, 48.9951587], //Bannwaldallee
                [8.3764663, 48.9988841], //Europahalle
                [8.3776224, 49.0017243], //Landesbausparkasse
                [8.3781534, 49.0060809], //Weinbrennerplatz
                [8.3790627, 49.0075113], //Sophienstrasse
                [8.3797789, 49.0100431], //Schillerstrasse
              ]
            }
          }, {

            //Collection-2 of data driven polylines

            'type': 'Feature',
            'properties': {
              'color': '#cb0000' //red
            },
          'geometry': {
            'type': 'LineString',
            'coordinates': [
                [8.3797789, 49.0100431], //Schillerstrasse
                [8.3831745, 49.0106281], //Muhlburger Tor
                [8.3940915, 49.0100745], //Europaplatz North
                [8.40034, 49.0097519], //Herrenstrasse
                [8.4051231, 49.0095443], //Marktplatz
                [8.4094226, 49.0094097], //Kronenplatz North
                [8.418140, 49.008857], //Durlacher Tor South
                ]
            }
          }, {

            //Collection-3 of data driven polylines

            'type': 'Feature',
            'properties': {
              'color': '#cbcb00' //yellow
            },
          'geometry': {
            'type': 'LineString',
            'coordinates': [
                [8.418140, 49.008857], //Durlacher Tor South
                [8.425245, 49.0074111], //Gottesauer Platz
                [8.4318298, 49.0062525], //Tullastrasse
                [8.4419337, 49.004295], //Weinweg
                [8.4558865, 49.0018954], //Untermühlstrasse
                [8.463732, 49.0003447], //Auer Strasse
              ]
            }
          }, {

            //Collection-4 of data driven polylines

              'type': 'Feature',
              'properties': {
                'color': '#00bf00' //green
              },
            'geometry': {
              'type': 'LineString',
              'coordinates': [
                  [8.463732, 49.0003447], //Auer Strasse
                  [8.4691501, 48.9992466], // Friedrichschule
                  [8.4742932, 48.9991371], // Schlossplatz
                  [8.4780523, 49.0000755], // Turmberg
                  [8.4768453, 48.9986079] // Karl-Weysser-Strasse
                ]
              }, 
          
          }
        ]
        
      }
    },

    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },

    //Apply Get method to arrays

    "paint": {
      "line-color": ['get', 'color'],
      "line-width": 3
    }

    });
}


// On/Off Layer 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


$('#lin2').change(function() {
  if($(this).is(":checked")) {
      
      addLayerLine2();
      
  }else{
    
    map.removeSource('Line2')
    map.removeLayer('Line2')
  }
         
});

// Polyline LAYER2----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addLayerLine2 (){

console.log('here');

  map.addLayer({
    "id": "Line2",
    "type": "line",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{

            'type': 'Feature',
            'properties': {
              'color': '#1E90FF' //green
            },
          'geometry': {
            'type': 'LineString',
            'coordinates': [
                [8.463732, 49.0003447], //Auer Strasse
                [8.4708053, 48.9900000] // Karl-Weysser-Strasse
              ]
            }, 
        
        }
      ]
      
    }
  },

  "layout": {
    "line-join": "round",
    "line-cap": "round",
    "visibility": "visible"
  },

  //Apply Get method to arrays

  "paint": {
    "line-color": ['get', 'color'],
    "line-width": 3
  }

  });


}


// Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub1').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub1();
    
  }else{
  
    //map.removeSource('subStadtWest')
    map.removeLayer('subWS')
  }
         
});
// Polygon Suburb Innenstadt West--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub1 () {
  console.log('hereSub')

  
    map.addLayer({
        'id': 'subWS',
          'type': 'fill',
          'source': {
              'type': 'geojson',
              'data': {
                  'type': 'Feature',
                  'geometry': {
                        'type': 'Polygon',
                            'coordinates':[[
                [8.3967791,49.0233835],
                [8.3951109,49.0226734],
                [8.3931635,49.0217165],
                [8.3914417,49.02055],
                [8.389623,49.0188318],
                [8.3884642,49.0167491],
                [8.3880008,49.0146422],
                [8.3878291,49.0135444],
                [8.3876789,49.0125311],
                [8.3876145,49.01156],
                [8.3874214,49.0105185],
                [8.38734,49.008752],
                [8.3871898,49.0075979],
                [8.3870611,49.0066407],
                [8.3869538,49.0054302],
                [8.3893356,49.0054021],
                [8.3912883,49.0054021],
                [8.3946786,49.0054443],
                [8.397908,49.0054584],
                [8.4000966,49.0054724],
                [8.4035084,49.0055006],
                [8.4036264,49.0068848],
                [8.4037766,49.0081234],
                [8.4038839,49.0089257],
                [8.4040127,49.0100798],
                [8.4040663,49.0107132],
                [8.4050212,49.0108117],
                [8.4060404,49.0109947],
                [8.4068451,49.0112902],
                [8.4075854,49.0115717],
                [8.4069094,49.0120924],
                [8.4062657,49.012571],
                [8.4057293,49.0129369],
                [8.4053645,49.0132606],
                [8.4059224,49.013528],
                [8.4060511,49.0142035],
                [8.4057293,49.014682],
                [8.4052885,49.014981],
                [8.4056319,49.015551],
                [8.4061039,49.0161913],
                [8.4065438,49.0168034],
                [8.4070803,49.017493],
                [8.4059913,49.0177674],
                [8.4048969,49.0179504],
                [8.4052569,49.0213345],
                [8.405448,49.0241855],
                [8.4018216,49.024284],
                [8.399354,49.0239745],
                [8.3967791,49.0233835]
                    
                  ]]
                    
                            }
                          }
                        },
                      'layout': {},
                      'paint': {
                                'fill-color': '#588d3f',
                                'fill-opacity': 0.1
                                }
         });
   
        }

// Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub2').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub2();
    
  }else{
  
    //map.removeSource('subStadtWest')
    map.removeLayer('subOstStadt')
  }
         
});

// Polygon Suburb Innenstadt Ost--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub2 () {
  console.log('hereSub')

  
    map.addLayer({
        'id': 'subOstStadt',
          'type': 'fill',
          'source': {
              'type': 'geojson',
              'data': {
                  'type': 'Feature',
                  'geometry': {
                        'type': 'Polygon',
                            'coordinates':[[
                
              [8.4084158,49.0236357,0],
              [8.405448,49.0241855,0],
              [8.4052569,49.0213345,0],
              [8.4048969,49.0179504,0],
              [8.4059913,49.0177674,0],
              [8.4070803,49.017493,0],
              [8.4065438,49.0168034,0],
              [8.4061039,49.0161913,0],
              [8.4056319,49.015551,0],
              [8.4052885,49.014981,0],
              [8.4057293,49.014682,0],
              [8.4060511,49.0142035,0],
              [8.4059224,49.013528,0],
              [8.4053645,49.0132606,0],
              [8.4057293,49.0129369,0],
              [8.4062657,49.012571,0],
              [8.4069094,49.0120924,0],
              [8.4075854,49.0115717,0],
              [8.4068451,49.0112902,0],
              [8.4060404,49.0109947,0],
              [8.4050212,49.0108117,0],
              [8.4040663,49.0107132,0],
              [8.4040127,49.0100798,0],
              [8.4038839,49.0089257,0],
              [8.4037766,49.0081234,0],
              [8.4036264,49.0068848,0],
              [8.4035084,49.0055006,0],
              [8.4062985,49.0055335,0],
              [8.4085945,49.0057587,0],
              [8.4102682,49.0059558,0],
              [8.4115342,49.0061247,0],
              [8.4134975,49.0070678,0],
              [8.4155682,49.0081023,0],
              [8.4172204,49.0088272,0],
              [8.4186472,49.0086256,0],
              [8.4189154,49.0096742,0],
              [8.4178426,49.0097938,0],
              [8.4180142,49.0112013,0],
              [8.4181644,49.012285,0],
              [8.4183485,49.01342,0],
              [8.4183807,49.0151933,0],
              [8.4178921,49.0169164,0],
              [8.4168193,49.0186684,0],
              [8.4152769,49.0202585,0],
              [8.4133457,49.0216727,0],
              [8.4122353,49.0222708,0],
              [8.4109961,49.0228125,0],
              [8.4096926,49.0232768,0],
              [8.4084158,49.0236357,0]
                               ]]
                    
                            }
                          }
                        },
                      'layout': {},
                      'paint': {
                                'fill-color': '#ff6633',
                                'fill-opacity': 0.1
                                }
         });
   
        }

//On/Off Suburb SUED------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*
$('#sub6').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub3();
    
  }else{
  
    map.removeSource('subSued1')
    map.removeLayer('subSued')
  }
         
});
*/

//Polygon Suburb Suedstadt-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  map.on('load', function() {

  map.addSource("subSued", {
    type: "geojson",
    data: "polygonSued.json"
});
  map.addLayer({
    id: "subSued",
    type: "fill",
    source: "subSued",
    paint: {
          'fill-color': '#588d3f',
          'fill-opacity': 0.1
  }
});
});





/* READ JSON FILE BY AJAX--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$.ajax({
  url: 'polygonSued.json',
  dataType: 'json',
  id: 'poly',
  type: 'get',
  chache: false,
  success: function(data) {

$(data.features).each(function(index = 33){
    //console.log(index = 33);
  
    map.addSource('poly', {
    type: 'geojson',
    data: 'polygonSued.json'

  });
  
    });
  }
});
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/




//Modal ABOUT------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var abModal = document.getElementById("aboutModal");

//Get button that opens the modal
var abButton = document.getElementById("aboutBtn");

//Get the <span> element that closes modal
var abSpan = document.getElementsByClassName("aboutClose")[0];

//When the user clicks the button -> open the modal 
abButton.onclick = function() {
  abModal.style.display = "inline-block";
}

// When the user clicks on "x" -> close modal
abSpan.onclick = function() {
  abModal.style.display = "none";
}


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

//Sidebar LINES-------------------------------------------------------------------------------------------------------------------------------------
// toggle functiono hides/shows LINES Sidebar

function x() {

  var sidebarLin = document.getElementById("sidebarLine")

  if(sidebarLin.style.display === "inline-block") {
    sidebarLin.style.display = "none";
  } else {
    sidebarLin.style.display = "inline-block";
  }
}

//toggle function display line by checkout/checkbox checkbox-"LineNo"
/*
var checkbox = document.getElementById("lin1")
checkbox.onclick = function () {
featureLayer.visibility = this.checked;
}
*/




//Sidebar NETWORK------------------------------------------------------------------------------------------------------------------------------------

function y() {

  var sidebarSub = document.getElementById("sidebarSuburb")

  if(sidebarSub.style.display === "inline-block") {
    sidebarSub.style.display = "none";
  } else {
    sidebarSub.style.display = "inline-block";
  }
}

//Slider----------------------------------------------------------------------------------------------------------------------------------------------

/*
var dataTime = d3.range(0,10).map(function(d) {
return new Date(1995 + d, 10, 3);
});

var sliderTime = d3
  .sliderBottom()
  .min(d3.min(dataTime))
  .max(d3.max(dataTime))
  .step(1000 * 60 * 60 * 24 * 365)
  .width(300)
  .tickFormat(d3.timeFormat('%Y'))
  .tickValues(dataTime)
  .default(new Date(1998, 10, 3))
  .on('onchange', val => {
    d3.select('p#value-time').text(d3.timeFormat('%Y')(val));

  });

  var gTime = d3
    .select('div#slider-time')
    .append('svg')
    .attr('width', 500)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(30,30)');

  gTime.call(sliderTime);
  
  d3.select('p#value-time').text(d3.tickFormat('%Y')(sliderTime.value()));
*/
/*
function showAbout() {
  var popup = document.getElementById("aboutPopup");
  popup.classList.toggle("show");
}
*/





