const users = [
{
    id: 1,
        name: 'Bob',
    isStudent: true,
},
{
    id: 2,
        name: 'Alex',
    isStudent: true,
},
{
    id: 3,
        name: 'alex',
    isStudent: true,
},
];

const newMap = (arr, callback) => {
    const result = []

    for(let i =0; i < arr.length; i++){
        result.push(callback(arr[i]))
    }

    return result
}
console.log(newMap(users, (user) => user.name))
