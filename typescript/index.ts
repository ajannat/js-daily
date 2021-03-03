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

// module
import {Player} from './classes/Player'
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

// interface on object

interface RectangleOptions{
    width: number,
    length: number
}

function drawRectangle(value: RectangleOptions){
    let width = value.width;
    let length = value.length;
}

drawRectangle({
    width: 30,
    length: 20
})

// generics

const addID = <T>(obj: T) => {
    let id = 1;
    return {...obj, id};
}

let user = addID({
    name: 'jannat',
    age: 26
})

// enums
enum ResponseType{
    SUCCESS,
    FAILURE,
    NOTFOUND
};

interface APIResponse<T>{
    status: number,
    type: ResponseType,
    data: T
}

const response1: APIResponse<string> = {
    status: 200,
    type: ResponseType.SUCCESS,
    data: 'test'
}

// tuples
let a:[number, string] = [12, 'asd'];

// a[1] = 12; cannot assign number to type string