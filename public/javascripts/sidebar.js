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
  
  var legendLin = document.getElementById("legendLin")
  document.getElementById('legendLin')
        .addEventListener('click', function () {

          if(legendLin.style.display === 'inline-block') {
            legendLin.style.display = 'none';
          } else {
            legendLin.style.display = 'inline-block';
          }

        });
