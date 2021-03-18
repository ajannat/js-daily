function Person(name, age){
    let person = {};

    person.name = name;
    person.age = age;

    person.eat = function(){
        console.log('person eating');
    };

    person.sleep = function(){
        console.log('person sleeping');
    };
    return person;
};

console.log(Person('hi', 24));