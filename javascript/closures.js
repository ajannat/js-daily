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