import {increaseAge, UserType} from "./immutability";

test("Reference type test", () => {
    let user: UserType = {
        name: "Daniil",
        age: 22,
        address: { title: "Minsk" },
    };

    increaseAge(user);

    expect(user.age).toBe(23);
});