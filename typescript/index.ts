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