let x = 23;

function myFunc() {
    let a = 10;
    console.log(x, a);//child can use parents property
}
myFunc();
console.log(x, a);//variable a is scoped inside the myFunc so cannot be used
