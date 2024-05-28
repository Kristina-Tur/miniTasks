import {
    Companies2,
    moveBooks,
    moveLaptop,
    moveUser,
    removeBook,
    updateBooks,
    updateCompanies, updateCompanies2,
    UserType,
    UserTypeAndBook, UserTypeAndCompanies
} from "./immutability";

test("upgrade address", () => {
    let user: UserType = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        }
    };

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.title).toBe('Kiev')
});

test("upgrade laptop", () => {
    let user: UserType = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        }
    };

    const movedLaptop = moveLaptop(user, 'Asus');

    expect(user).not.toBe(movedLaptop);
    expect(user.laptop).not.toBe(movedLaptop.laptop);
    expect(user.address).toBe(movedLaptop.address);
    expect(movedLaptop.laptop.title).toBe('Asus')
});
test("add new book", () => {
    let user: UserTypeAndBook = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        },
        book: ['html', 'css', 'js']
    };

    const movedBooks = moveBooks(user, 'ts');

    expect(user).not.toBe(movedBooks);
    expect(user.laptop).toBe(movedBooks.laptop);
    expect(user.address).toBe(movedBooks.address);
    expect(user.book).not.toBe(movedBooks.book);
    expect(movedBooks.book[3]).toBe('ts')
    expect(user.book[2]).toBe('js')
});
test("update books", () => {
    let user: UserTypeAndBook = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        },
        book: ['html', 'css', 'js']
    };

    const movedBooks = updateBooks(user, 'js',  'ts');

    expect(user).not.toBe(movedBooks);
    expect(user.laptop).toBe(movedBooks.laptop);
    expect(user.address).toBe(movedBooks.address);
    expect(user.book).not.toBe(movedBooks.book);
    expect(movedBooks.book[2]).toBe('ts')
});
test("remove book", () => {
    let user: UserTypeAndBook = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        },
        book: ['html', 'css', 'js']
    };

    const movedBooks = removeBook(user, 'js');

    expect(user).not.toBe(movedBooks);
    expect(user.laptop).toBe(movedBooks.laptop);
    expect(user.address).toBe(movedBooks.address);
    expect(user.book).not.toBe(movedBooks.book);
    expect(movedBooks.book[2]).toBe(undefined);
    expect(movedBooks.book.length).toBe(2)
});

test("update companies", () => {
    let user: UserTypeAndCompanies = {
        name: "Kristina",
        age: 28,
        address: {
            title: "Brest"
        },
        laptop: {
            title: 'Honor'
        },
        book: ['html', 'css', 'js'],
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'Google'}]
    };

    const movedBooks = updateCompanies(user, 1, 'Epam');

    expect(user).not.toBe(movedBooks);
    expect(movedBooks.companies[0].title).toBe('Epam')
});

test("update companies2", () => {
    let companies: Companies2 = {
            'Roman': [{id: 1, title: 'Епам'}, {id: 2, title: 'Google'}],
            'Alex': [{id: 1, title: 'Google'}],
    };

    const movedBooks = updateCompanies2(companies,'Roman', 1, 'Epam');

    expect(companies).not.toBe(movedBooks);
    expect(movedBooks['Roman'][0].title).toBe('Epam')
    expect(companies['Alex']).toBe(movedBooks['Alex'])
});

