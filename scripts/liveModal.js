/*Modal LIVE------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var liveModal = document.getElementById("liveModal");

//Variables Changed
var liveButton = document.getElementById("liveBtn");

//Variables changed
var liveSpan = document.getElementsByClassName("liveClose")[0];

//When the user clicks the button -> open the modal 
liveButton.onclick = function() {
  liveModal.style.display = "inline-block";
  addChartX();
}
console.log('here')
// When the user clicks on "x" -> close modal
liveSpan.onclick = function() {
  liveModal.style.display = "none";
}

// When the user clicks anywhere outside of either modal itll be closed
window.onclick = function(event) {
  if (event.target == abModal) {
    abModal.style.display = "none";
  }
  if (event.target == liveModal) {
    liveModal.style.display = "none";
  }
}
*/

$("div[id^='myModal']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show'); 
  });

});