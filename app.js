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




