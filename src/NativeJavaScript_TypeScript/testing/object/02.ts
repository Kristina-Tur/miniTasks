type AddressPropsType = {
    streetTitle: string
    city: CityPropsType
}

type CityPropsType = {
    title: string
    countryTitle: string
}

type TechPropsType = {
    id: number
    title: string
}

type StudentPropsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressPropsType
    technologies: Array<TechPropsType>
}

const student: StudentPropsType = {
    id: 1,
    name: "Dimych",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}