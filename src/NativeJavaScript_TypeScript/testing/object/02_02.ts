export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type AddressType = {
    number?: number
    street: StreetType
}

type StreetType = {
    title: string
}

type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}