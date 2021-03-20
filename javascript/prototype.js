function Person(name, age){
    let person = Object.create(Person.prototype);

    person.name = name;
    person.age = age;
    

    return person;
};
Person.prototype = {

    eat(){
        console.log('person eating');
    },

    sleep(){
        console.log('person sleeping');
    }
};
const jannat = Person('jannat', 26);
jannat.eat();