var n = 2;
let sum = () => {
    var k = 5;
    return function(){
        return k;
    }
}

console.dir(sum());//defines closure

let sum2 = () => {
    var k = 5;
    return k;
}

console.dir(sum2());//does not defines closure

function stopWatch(){
    var startTime = Date.now();

    function getDelay(){
        console.log(Date.now() - startTime);
    }
    return getDelay;
}

var timer = stopWatch();

for(var i = 0; i < 1000000; i++){
    var a = Math.random() * 1000000;
}
timer();

// closure in async
function async(){
    var a = 20;

    setTimeout(()=>{
        console.log(a);
    })
}

// closure in api call
function callApi(url){
    fetch(url)
    .then((res) => {
        console.log(res);
    })
}

callApi("something.com");
// closure is a function with some remembered values