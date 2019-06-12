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

/*Clicking thorugh modals------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

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

/* Inserting donut charts ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

$(document).ready(function ($) {
  function animateElements() {
      $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
              $(this).data('animate', true);
              $(this).find('.circle').circleProgress({
                  // startAngle: -Math.PI / 2,
                  value: percent / 100,
                  size : 150,
                  thickness: 20,
                  fill: {
                      color: '#c1e5b0', //green
                      
                  }
              }).on('circle-animation-progress', function (event, progress, stepValue) {
                  $(this).find('strong').text((stepValue*100).toFixed(0) + "%");
              }).stop();
          }
      });
  }

  animateElements();
  $(window).scroll(animateElements);
});

/*Inserting Timestamp UTC + 2------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

var activateTimestamps = function() {
  var updateLiveTimestamp = function($timestamp, format) {
    var timestamp = moment().utc(19,6,12,1,16).format(format);
    $timestamp.html(timestamp);
  };

  $('.livestamp').each(function(index, element) {
    var $element = $(element);
    var defaultFormat = 'DD.MM.YYYY HH:mm:ss';
    var timestampFormat = $element.data('format') || defaultFormat;
    
    var callback = function() {
      updateLiveTimestamp($element, timestampFormat);
    };
    setInterval(callback, 1000);
  });
};

activateTimestamps();

