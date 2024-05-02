import {CityType, GovernmentBuildingsType, HouseType} from '../object/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export const getHousesOnTheStreet = (houses: HouseType[], street: string) => {
   return houses.filter(house => house.address.street.title === street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: GovernmentBuildingsType[], staffCount: number) => {
    return buildings.filter(b => b.staffCount > staffCount)
}
