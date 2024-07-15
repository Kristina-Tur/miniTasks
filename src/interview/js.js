/*let arr = "fff"
arr.length = 0
console.log(arr)*/

/*const str = 'hdhd'
str.length = 0
console.log(str)*/

/*< script >
console.log(typeof Object)
console.log(typeof Date)
console.log(typeof null)
console.log(typeof 1n)
console.log(typeof new String())
console.log(typeof new Function())
console.log(typeof NaN)
console.log(typeof [])
console.log(typeof console.log(1))
console.log(typeof (typeof {}))
< /script>*/


/*let x = 0

function count() {
    let y = 0
    getX = () => console.log(x)

    getY = () => console.log(y)
    return {
        inc() {
            x++, y++
        }, getX, getY
    }
}

const qwe = count()
qwe.inc()
qwe.inc()
console.log(qwe().getX())
console.log(qwe().getY())*/

try{
    if(console.log(1)){
        console.log(2)
    } else {
        throw new Error()
    }
}catch{
    console.log(console.log(3))
}

for (let i = 1; i < 3; i++) {
    console.log(i)
}
for (let i = 1; i < 3; ++i) {
    console.log(i)
}