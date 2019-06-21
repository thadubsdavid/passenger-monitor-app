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