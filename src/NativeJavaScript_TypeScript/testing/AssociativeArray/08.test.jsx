let users;
beforeEach(() => {
  users = {
        '1': {id: '10', name: 'Cristian'},
        '2': {id: '20', name: 'david'},
        '3': {id: '30', name: 'joe'},
        '4': {id: '40', name: 'tom'},
        '5': {id: '50', name: 'qwe'},
        '6': {id: '60', name: 'op'},
        '7': {id: '70', name: 'name'},
        '8': {id: '80', name: 'guy'},
    }
})

test('fff', () => {
    users[2].name = 'David'
    delete users[8]

    expect(users[1].name).toBe('Cristian')
    expect(users[7].id).toBe('70')
    expect(users[2].name).toBe('David')
    expect(users[3]).toEqual({id: '30', name: 'joe'})
    expect(users[8]).toBeUndefined()
})