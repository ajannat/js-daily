if(true){
    var varVariable = "var";
}
console.log(varVariable);
let a = 23;
if(true){
    let letVariable = "var";
}
console.log(letVariable);//cannot access letVariable here because it is a blocked scoped variable

const pi = 3.1416;

pi = 3.1314;//cannot do that cause const variable can be assigned only once
