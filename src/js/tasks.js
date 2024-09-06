//tasks1. Написать функцию накопления createEAdder, которая будет принимать новое значение
//и суммировать его к предыдущему результату


//tasks2. Создать функцию createPerson, которая будет возвращать объект
//с методами для задания и получения имени

//tasks1
const createEAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const func = createEAdder(2)

console.log(func(3))

//tasks2
