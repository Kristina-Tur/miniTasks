test('big test', () => {
    const user = {
        name: 'Kristina',
        age: 28
    }

    function increaseAge(u){
        u.age++
    }

    increaseAge(user)



    expect(user.age).toBe(29)

    let superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})