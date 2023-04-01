var benchmarkjs = require('benchmarkjs');

benchmarkjs.options({
    testTime: 4000
});

var bigArray1 = new Array(1000);
benchmarkjs('n < max', function () {
    var a = 0; 
    for(var i = 0 ; i < 10000; i++){
        a |= i;
    }
});
 
var bigArray2 = new Array(1000);
benchmarkjs('n < hugeArray2.length', function () {
    var a = 0; 
    for(var i = 0 ; i < 1000000; i++){
        a |= i;
    }
});
 
console.log(benchmarkjs.results);