
// Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub1').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub1();
    addChartSub1();
    

    $('#statisticsSub1').show();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();


    
  }else{
    $('#statisticsSub1').remove();

  
    //map.removeSource('subStadtWest')
    map.removeLayer('subWS')
    map.removeSource('subInnenWest')
  }
         
});
// Polygon Suburb Innenstadt West--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub1 () {
  console.log('TEST')
    map.addSource("subInnenWest", {
      type: "geojson",
      data: "geodata/polygonInnenWest.json"
  });
    map.addLayer({
      id: "subWS",
      name: "Innenstadt West",
      type: "fill",
      source: "subInnenWest",
      paint: {
            'fill-color': [
            'interpolate',
            ['linear'],
            ['number', ['get', 'flow']],
            
            1, '#00394A', //dark blue
            2, '#144B5B',
            3, '#285D6D',
            4, '#3B707E',
            5, '#4F828F',
            6, '#6D9DA9',
            7, '#81AFBA',
            8, '#95C2CC',
            9, '#A8D4DD',
            10, '#BCE6EE', //blue
            ],
            //red '#ff6633', 
            'fill-opacity': 0.3
    },

  });
  
  document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subWS', ['==', ['number', ['get', 'Hour']], hour]);
  });

  document.getElementById('sliderDay').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    console.log(day);
    map.setFilter('subWS', ['==', ['number', ['get', 'Day']], day]);
    });

  map.on('click', 'subWS', function (e) {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'subWS', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'subWS', function () {
    map.getCanvas().style.cursor = '';
    });
  }

// Layer Suburb On/Off----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub2').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub2();
    addChartSub2();

    $('#statisticsSub2').show();
    $('#statisticsSub1').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();

    
  }else{

    $('statisticsSub2').remove();    
    //map.removeSource('subStadtWest')
    map.removeLayer('subOstStadt')
  }
         
});

// Polygon Suburb Innenstadt Ost--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub2 () {
  console.log('hereSub')

  map.addSource("subInnenOst", {
    type: "geojson",
    data: "geodata/polygonInnenOst.json"
});
  map.addLayer({
    id: "subOS",
    name: "Innenstadt Ost",
    type: "fill",
    source: "subInnenOst",
    paint: {
          'fill-color': [
          'interpolate',
          ['linear'],
          ['number', ['get', 'flow']],
          
          1, '#00394A', //dark blue
          2, '#144B5B',
          3, '#285D6D',
          4, '#3B707E',
          5, '#4F828F',
          6, '#6D9DA9',
          7, '#81AFBA',
          8, '#95C2CC',
          9, '#A8D4DD',
          10, '#BCE6EE', //blue
          ],
          //red '#ff6633', 
          'fill-opacity': 0.3
  },
        });

          document.getElementById('slider').addEventListener('input', function(e) {
          var hour = parseInt(e.target.value);
          console.log(hour);
          map.setFilter('subOS', ['==', ['number', ['get', 'Hour']], hour]);
          });

          document.getElementById('sliderDay').addEventListener('input', function(e) {
            var day = parseInt(e.target.value);
            console.log(day);
            map.setFilter('subOS', ['==', ['number', ['get', 'Day']], day]);
            });

        }
// ON/OFF OSTSTADT----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub5').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub5();
    addChartSub5();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').show();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();

    
  }else{
    $('statisticsSub5').remove();
    
    map.removeSource('subOst')
    map.removeLayer('subOst')
  }
         
});

//Polygon Oststadt------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addLayerSub5 () {
console.log('TEST')
  map.addSource("subOst", {
    type: "geojson",
    data: "geodata/polygonOst.json"
});
  map.addLayer({
    id: "subOst",
    type: "fill",
    source: "subOst",
    paint: {
      'fill-color': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'flow']],
      
      1, '#00394A', //dark blue
      2, '#144B5B',
      3, '#285D6D',
      4, '#3B707E',
      5, '#4F828F',
      6, '#6D9DA9',
      7, '#81AFBA',
      8, '#95C2CC',
      9, '#A8D4DD',
      10, '#BCE6EE', //blue
      ],
      //red '#ff6633', 
      'fill-opacity': 0.3
},
});

document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subOst', ['==', ['number', ['get', 'Hour']], hour]);
  });

  document.getElementById('sliderDay').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    console.log(day);
    map.setFilter('subOst', ['==', ['number', ['get', 'Day']], day]);
    });





map.on('click', 'subOst', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'subOst', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'subOst', function () {
  map.getCanvas().style.cursor = '';
  });
}

//On/Off Suburb SUED------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub6').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub6();
    addChartSub6();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').show();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();

    
  }else{
    $('#statisticsSub6').remove();
    
    map.removeSource('subSued')
    map.removeLayer('subSued')
  }
         
});


//Polygon Suburb Suedstadt-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub6 () {
    console.log('TEST')
    map.addSource("subSued", {
      type: "geojson",
      data: "geodata/polygonSued.json"
  });
    map.addLayer({
      id: "subSued",
      type: "fill",
      source: "subSued",
      paint: {
        'fill-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'flow']],
        
        1, '#00394A', //dark blue
        2, '#144B5B',
        3, '#285D6D',
        4, '#3B707E',
        5, '#4F828F',
        6, '#6D9DA9',
        7, '#81AFBA',
        8, '#95C2CC',
        9, '#A8D4DD',
        10, '#BCE6EE', //blue
        ],
        //red '#ff6633', 
        'fill-opacity': 0.3
},
  });

  document.getElementById('slider').addEventListener('input', function(e) {
    var hour = parseInt(e.target.value);
    console.log(hour);
    map.setFilter('subSued', ['==', ['number', ['get', 'Hour']], hour]);
    });

    document.getElementById('sliderDay').addEventListener('input', function(e) {
      var day = parseInt(e.target.value);
      console.log(day);
      map.setFilter('subSued', ['==', ['number', ['get', 'Day']], day]);
      });

  map.on('click', 'subSued', function (e) {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
    .addTo(map);
    });
     
    // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'subSued', function () {
    map.getCanvas().style.cursor = 'pointer';
    });
     
    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'subSued', function () {
    map.getCanvas().style.cursor = '';
    });
    
}
// ON OFF Nordstadt-----------------------------------------------------------------------------------------------------------------------------------------------------

$('#sub3').change(function() {
  if($(this).is(":checked")) {
      
    addLayerSub3();
    addChartSub3();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').show();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();

    
  }else{
    $('statisticsSub3').remove();
    
    map.removeSource('subNord')
    map.removeLayer('subNord')
  }
         
});


//Polygon Nordstadt-----------------------------------------------------------------------------------------------------------------------------------------

function addLayerSub3() {
  console.log('TESTNord')
  map.addSource("subNord", {
    type: "geojson",
    data: "geodata/polygonNord.json"
});
  map.addLayer({
    id: "subNord",
    type: "fill",
    source: "subNord",
    paint: {
      'fill-color': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'flow']],
      1, '#00394A', //dark blue
      2, '#144B5B',
      3, '#285D6D',
      4, '#3B707E',
      5, '#4F828F',
      6, '#6D9DA9',
      7, '#81AFBA',
      8, '#95C2CC',
      9, '#A8D4DD',
      10, '#BCE6EE', //blue
      ],
      //red '#ff6633', 
      'fill-opacity': 0.3
},
});

document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subNord', ['==', ['number', ['get', 'Hour']], hour]);
  });

  document.getElementById('sliderDay').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    console.log(day);
    map.setFilter('subNord', ['==', ['number', ['get', 'Day']], day]);
    });

map.on('click', 'subNord', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'subNord', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'subNord', function () {
  map.getCanvas().style.cursor = '';
  });
}
// ON OFF NordWest-------------------------------------------------------------------------------------------------------------------------------------------

$("#sub7").change(function () {
  if($(this).is(':checked')) {

    addLayerSub7();
    addChartSub7();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').show();
    $('#statisticsSub8').hide();

    

  } else {
    $('statisticsSub7').remove();
    
    map.removeSource("subNordWest")
    map.removeLayer("subNordWest")
  }

});

//Polygon NordWest--------------------------------------------------------------------------------------------------------------------------------------------

function addLayerSub7() {
  
  console.log('TESTNordWest')
  map.addSource("subNordWest", {
    type: "geojson",
    data: "geodata/polygonNordWest.json"
});
  map.addLayer({
    id: "subNordWest",
    type: "fill",
    source: "subNordWest",
    paint: {
      'fill-color': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'flow']],
      
      1, '#00394A', //dark blue
      2, '#144B5B',
      3, '#285D6D',
      4, '#3B707E',
      5, '#4F828F',
      6, '#6D9DA9',
      7, '#81AFBA',
      8, '#95C2CC',
      9, '#A8D4DD',
      10, '#BCE6EE', //blue
      ],
      //red '#ff6633', 
      'fill-opacity': 0.3
},

});

document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subNordWest', ['==', ['number', ['get', 'Hour']], hour]);
  });

  document.getElementById('sliderDay').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    console.log(day);
    map.setFilter('subNordWest', ['==', ['number', ['get', 'Day']], day]);
    });

map.on('click', 'subNordWest', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'subNordWest', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'subNordWest', function () {
  map.getCanvas().style.cursor = '';
  });
}
// ON OFF West-------------------------------------------------------------------------------------------------------------------------------------------

$('#sub4').change(function() {
  if ($(this).is(':checked')) {
    
    addLayerSub4();
    addChartSub4();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').show();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').hide();


  } else {
    $('statisticsSub4').remove();

    map.removeSource('subWestFar')
    map.removeLayer('subWestFar')
}

});

//Polygon WestFar-----------------------------------------------------------------------------------------------------------------------------------------

function addLayerSub4 () {

  map.addSource("subWestFar", {
    type: "geojson",
    data: "geodata/polygonWestFar.json"
});
  map.addLayer({
  id: "subWestFar",
  type: "fill",
  source: "subWestFar",
  paint: {
    'fill-color': [
    'interpolate',
    ['linear'],
    ['number', ['get', 'flow']],
    
    1, '#00394A', //dark blue
    2, '#144B5B',
    3, '#285D6D',
    4, '#3B707E',
    5, '#4F828F',
    6, '#6D9DA9',
    7, '#81AFBA',
    8, '#95C2CC',
    9, '#A8D4DD',
    10, '#BCE6EE', //blue
    ],
    //red '#ff6633', 
    'fill-opacity': 0.3
},
});
//Assign slider
document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subWestFar', ['==', ['number', ['get', 'Hour']], hour]);
  
  });

  document.getElementById('sliderDay').addEventListener('input', function(e) {
    var day = parseInt(e.target.value);
    console.log(day);
    map.setFilter('subWestFar', ['==', ['number', ['get', 'Day']], day]);
    });


//Assign Pop
map.on('click', 'subWestFar', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'subWestFar', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'subWestFar', function () {
  map.getCanvas().style.cursor = '';
  });
}

//ON OFF SuedWest-------------------------------------------------------------------------------------------------------------------------------------------------------------
$('#sub8').change(function() {
  if ($(this).is(':checked')) {
    
    addLayerSub8();
    addChartSub8();

    $('#statisticsSub1').hide();
    $('#statisticsSub2').hide();
    $('#statisticsSub3').hide();
    $('#statisticsSub4').hide();
    $('#statisticsSub5').hide();
    $('#statisticsSub6').hide();
    $('#statisticsSub7').hide();
    $('#statisticsSub8').show();

    $('#h3').remove();


  } else {
    $('statisticsSub8').remove();

    map.removeSource('subSuedWest')
    map.removeLayer('subSuedWest')
}

});

//Polygon SuedWest-------------------------------------------------------------------------------------------------------------------------------------------------------------
function addLayerSub8 () {

  map.addSource("subSuedWest", {
    type: "geojson",
    data: "geodata/polygonSuedWest.json"
});
  map.addLayer({
  id: "subSuedWest",
  type: "fill",
  source: "subSuedWest",
  paint: {
    'fill-color': [
    'interpolate',
    ['linear'],
    ['number', ['get', 'flow']],
    
    1, '#00394A', //dark blue
    2, '#144B5B',
    3, '#285D6D',
    4, '#3B707E',
    5, '#4F828F',
    6, '#6D9DA9',
    7, '#81AFBA',
    8, '#95C2CC',
    9, '#A8D4DD',
    10, '#BCE6EE', //blue
    ],
    //red '#ff6633', 
    'fill-opacity': 0.3
},
});
document.getElementById('sliderDay').addEventListener('input', function(e) {
  var day = parseInt(e.target.value);
  console.log(day);
  map.setFilter('subSuedWest', ['==', ['number', ['get', 'Day']], day]);
  });

document.getElementById('slider').addEventListener('input', function(e) {
  var hour = parseInt(e.target.value);
  console.log(hour);
  map.setFilter('subSuedWest', ['==', ['number', ['get', 'Hour']], hour]);
  });

 

map.on('click', 'subSuedWest', function (e) {
  new mapboxgl.Popup()
  .setLngLat(e.lngLat)
  .setHTML('<h6>' + e.features[0].properties.Name + '</h6>' + '<p1>' + "Density-Level:\n" + e.features[0].properties.flow + '\n' + '</p1><br><p2>' + "Density:\n" + e.features[0].properties.Count + '\n' + '</p2><br>')
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on('mouseenter', 'subSuedWest', function () {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'subSuedWest', function () {
  map.getCanvas().style.cursor = '';
  });
}







