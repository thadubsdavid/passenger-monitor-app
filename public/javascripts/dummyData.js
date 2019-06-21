//Data Generator UPDATED Lines------------------------------------------------------------------------------------------------------------------------------

//Math.floor(Math.random() * (max - min + 1)) + min;
var startLines = Array.from({ length: 5 }, () => Math.floor(Math.random() * 6)+5);
var highLines = Array.from({ length: 5 }, () => Math.floor(Math.random() * 51) + 100);
var midLines = Array.from({length: 10 }, () => Math.floor(Math.random() * 51) + 50)
var lowLines =  Array.from({ length: 10 }, () => Math.floor(Math.random() * 36)+15);

var endRev = startLines.reverse();

var trendModerat = startLines.concat(highLines,startLines);
console.log(modalTrend)

var trend = startLines.concat(midLines,highLines,endRev);
console.log(trend)

var trendLong = startLines.concat(midLines,highLines,lowLines,startLines)

var trendT5 = startLines.concat(midLines,startLines,midLines);

var sliderData = document.getElementById("value");



//Data Generator UPDATED Suburbs------------------------------------------------------------------------------------------------------------------------------
var entryTyp1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 2001)+ 7000); //max 9000
var exitTyp1 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 2001) + 4000); //max 6000

var entryTyp2 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 601)+ 2800); //max 3400
var exitTyp2 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 601) + 2300); //max 2900

var entryTyp3 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 201)+ 2000); //max 2200
var exitTyp3 = Array.from({ length: 15 }, () => Math.floor(Math.random() * 201) + 1600); //max 1800



var dataLow = Array.from({ length: 5 }, () => Math.floor(Math.random() * 201) + 1600); //max 1800
var dataHigh = Array.from({ length: 5 }, () => Math.floor(Math.random() * 601)+ 2800); //max 3400
var dataMid = Array.from({ length: 5 }, () => Math.floor(Math.random() * 201)+ 2000); //max 2200

var trendSub = dataLow.concat(dataHigh,dataMid)


/*
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

for (var dummyExit =[],i=0;i<800;++i) dummyExit[i]=i;

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
*/
