// function execution time

function doSomething(){
    console.log("I am doing something");
    for(var i=0; i<10000; i++){
        var a = i;
    }
}

var start = performance.now()
doSomething();
var end = performance.now()
console.log("Execution time: " + (end - start) + "ms");
