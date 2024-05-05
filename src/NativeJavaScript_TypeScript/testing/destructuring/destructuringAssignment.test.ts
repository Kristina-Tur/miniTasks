import {sum} from '../01';

type geoType = {
    lat: string
    lng: string
}

type streetType = {
    street: string
    geo: geoType
}

type superUserType = {
    id: number
    name: string
    username: string
    email: string
    address: streetType
}

let superUser: superUserType;
beforeEach(() => {
    superUser = {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            geo: {
                lat: '-38.2386',
                lng: '57.2232',
            },
        }
    }
})


test('', () => {

    let {email} = superUser
    let {street} = superUser.address
    let {lat} = superUser.address.geo

    expect(email).toBe('Rey.Padberg@karina.biz');
    expect(street).toBe('Kattie Turnpike');
    expect(lat).toBe('-38.2386');
})