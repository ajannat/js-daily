// type aliases

type stringOrNum = string | number;
type userType = { name: string; age: number }

const userObject = (
    id: stringOrNum,
    user: userType
) => {
    console.log(id, user.age, ' ', user.name);
}