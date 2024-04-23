import {CityType} from './02_02';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {
                        title: 'Street'
                    },
                    number: 101
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {
                        title: 'Street'
                    },
                    number: 100
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {
                        title: 'Street'
                    },
                    number: 102
                }
            },

        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 1000,
                address: {
                    street: {
                        title: 's'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 's'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAt).toBe(2020);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(101);
    expect(city.houses[0].address.street.title).toBe('Street');

    expect(city.houses[1].buildedAt).toBe(2020);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.number).toBe(100);
    expect(city.houses[1].address.street.title).toBe('Street');

    expect(city.houses[2].buildedAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(102);
    expect(city.houses[2].address.street.title).toBe('Street');
})

test('city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(1000)
    expect(city.governmentBuildings[0].address.street.title).toBe('s')

    expect(city.governmentBuildings[1].type).toBe('FIRE-STATION')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('s')
})