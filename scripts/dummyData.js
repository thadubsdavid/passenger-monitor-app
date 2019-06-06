//Data Generator #1 ENTRY Sub------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for (var dummyEntry =[],i=200;i<800;++i) dummyEntry[i]=i;

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

for (var dummy =[],i=5;i<40;++i) dummy[i]=i;

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
dummy = shuffle(dummy);
console.log(dummy);

