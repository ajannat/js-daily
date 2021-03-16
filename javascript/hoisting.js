var a;
console.log(a);
a = 2;

console.log(b);
var b = 2;

let c;
console.log(c);
c = undefined;
c = 15;

var LANGUAGE = 'JAVA';
var language = 'JAVASCRIPT';

getLanguage=() => {
    if(!language){
        var language = LANGUAGE;
    }
    return language;
}

console.log(`I love ${getLanguage()}`);//I love JAVA because of hoisting

let LANGUAGE1 = 'JAVA';
let language2 = 'JAVASCRIPT';

getLanguage=() => {
    if(!language2){
        let language2 = LANGUAGE1;
    }
    return language2;
}

console.log(`I love ${getLanguage()}`);//I love JAVASCRIPT

bb = 12;
var bb;
console.log(bb);//hoisting

bb1 = 12;
let bb1;
console.log(bb1);