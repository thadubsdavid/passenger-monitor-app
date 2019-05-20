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

const Http = new XMLHttpRequest();
const url = 'http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=pk.eyJ1IjoidGhhZHVic2RhdmlkIiwiYSI6ImNqdWk4ZHJ5cjBmMHY0NG43MTJpNjJ3d3IifQ.ZJ-oVOrNt0CHXDfVSDQrLw';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
} 

//Polyline----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Add layer for polyline on map
map.on('load', function () {

  map.addLayer({
    "id": "Line2",
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
    "line-cap": "round"
  },

  //Apply Get method to arrays

  "paint": {
    "line-color": ['get', 'color'],
    "line-width": 3
  }

  });
})


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

