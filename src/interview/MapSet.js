/*debugger*/
let obj = {f: 1}

const map = new Map(Object.entries(obj))

console.log(map)

let arr = [1, 2]

const set = new Set(arr)
/*
set.forEach(v => alert(v))
map.forEach(v => alert(v))
*/

console.log(set)
console.log(typeof set)
console.log(typeof map)
console.log(map.values())












