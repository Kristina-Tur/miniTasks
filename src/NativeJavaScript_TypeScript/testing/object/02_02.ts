export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizensNumber: number
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

type StreetType = {
    title: string
}

export type GovernmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}