import {CityType} from './../object/02_02';
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from './filter';

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {

                        title: 'White street'
                    },
                    number: 101
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {
                        title: 'Happy street'
                    },
                    number: 100
                }
            },
            {
                buildedAt: 2020, repaired: false,
                address: {
                    street: {
                        title: 'Happy street'
                    },
                    number: 102
                }
            },

        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 100,
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

test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
});

test("list of streets titles of houses", () => {
    let happyHouses = getHousesOnTheStreet(city.houses, "Happy street");
    let whiteHouses = getHousesOnTheStreet(city.houses, "White street");

    expect(happyHouses.length).toBe(2);
    expect(whiteHouses.length).toBe(1);
});

test("buildings with correct staff count", () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThen(
            city.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
});


