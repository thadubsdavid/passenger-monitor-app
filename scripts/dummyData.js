//Data Generator #1 ENTRY Sub------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for (var dummyEntry =[],i=0;i<800;++i) dummyEntry[i]=i;

function shuffle(array) {

  var cache, random, top = array.length;

  if(top) while(--top) {
    random = Math.floor(Math.random() * (top + 1));
    cache = array[random];
    array[random] = array[top];
    array[top] = cache;
  }
  return array;
}
dummyEntry = shuffle(dummyEntry);

//Data Generator #2 EXIT Sub-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (var dummyExit =[],i=200;i<800;++i) dummyExit[i]=i;

function shuffle(array) {

  var cache, random, top = array.length;

  if(top) while(--top) {
    random = Math.floor(Math.random() * (top + 1));
    cache = array[random];
    array[random] = array[top];
    array[top] = cache;
  }
  return array;
}
dummyExit = shuffle(dummyExit);

// Data Generator #3 LINES------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (var dummy =[],i=0 ;i<40 ;++i) dummy[i]=i;

function shuffle(array) {

  var cache, random, top = array.length;

  if(top) while(--top) {
    random = Math.floor(Math.random() * 10) + 1;
    cache = array[random];
    array[random] = array[top];
    array[top] = cache;
  }
  return array;
}
dummy = shuffle(dummy);
console.log(dummy);

//Data Generator UPDATED------------------------------------------------------------------------------------------------------------------------------

//Math.floor(Math.random() * (max - min + 1)) + min;
var start = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6)+5);
var high = Array.from({ length: 10 }, () => Math.floor(Math.random() * 51) + 100);
var end =  Array.from({ length: 10 }, () => Math.floor(Math.random() * 6)+5);

var endRev = end.reverse();

var trend = start.concat(high,endRev) ;

console.log(trend)
/*
$(function () {
    function randomNumber(minimum, maximum){
        return Math.round( Math.random() * (maximum - minimum) + minimum);
    }
    var d1 = [];
    var trendData;
    
    for (var  x = 1; x < 100; x++)  {
        function randomNumber(minimum, maximum){
            return Math.round( Math.random() * (maximum - minimum) + minimum);
        }
        trendData = randomNumber(x,100);
        
        // @strah
       var a = 0.05;
       var b = 1;
       trendData = a * x^2 + randomNumber(b * x^2, b * x / 2) ;
       //console.log(trendData)
       d1.unshift(trendData);
       console.log(d1)
        
        //$('textarea').append(y + "\t");
    }
    
    
});
*/


