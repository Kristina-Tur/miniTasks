export type UserType = {
    name: string;
    age: number;
    address: {
        title: string
    };
    laptop: {
        title: string
    }
};

export type UserTypeAndBook = UserType & {
    book: string[]
}

type Companies = {
    id: number
    title: string
}

export type UserTypeAndCompanies = UserTypeAndBook & {
    companies: Companies[]
}

export type Companies2 = {
        [key: string]: Companies[]
}

export function moveUser(u: UserType, title: string) {
    return {...u, address: {title: title}}
}

export function moveLaptop(u: UserType, title: string) {
    return {...u, laptop: {title: title}}
}

export function moveBooks(u: UserTypeAndBook, title: string) {
    return {...u, book: [...u.book, title]}
}
export function updateBooks(u: UserTypeAndBook, title: string, title2: string) {
    return {...u, book: u.book.map(item => item === title ? title2 : item)}
}
export function removeBook(u: UserTypeAndBook, title: string) {
    return {...u, book: u.book.filter(b => b !== title )}
}
export function updateCompanies(u: UserTypeAndCompanies, index: number, title: string) {
    return {...u, companies: u.companies.map(c => c.id === index ? {...c, title} : c)}
}
export function updateCompanies2(company: Companies2, userTitle: string, id: number,
                                 newTitle: string) {
    return {...company, [userTitle]: company[userTitle].map(c => c.id === id ? {...c, title: newTitle} : c)}
}
