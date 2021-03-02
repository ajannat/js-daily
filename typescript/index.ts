// type aliases

type stringOrNum = string | number;
type userType = { name: string; age: number }

const userObject = (
    id: stringOrNum,
    user: userType
) => {
    console.log(id, user.age, ' ', user.name);
}

// function signatures
let myFunction: (x: string, y: number, z: boolean, user: {id: string, name: string}) => string;

myFunction = (a: string, b: number, z:boolean, user: { id: string, name: string }) => {
    return '123';
}

// classes
class Player{
    name: string;
    age: number;
    male: boolean;

    constructor(n: string, a: number, m: boolean){
        this.name = n;
        this.age = a;
        this.male = m;
    }
}

const pl = new Player('jannat', 25, true);
const arr: Player[] = [];
arr.push(pl);

// access modifiers
class Player2{
    private name: string;
    age: number;
    readonly male: boolean;

    constructor(n: string, a: number, m: boolean){
        this.name = n;
        this.age = a;
        this.male = m;
    }
}

const pl2 = new Player2('jannat', 25, true);// cannot get or set using instance
