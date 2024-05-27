export type UserType = {
    name: string;
    age: number;
    address: { title: string };
};

export function increaseAge(u: UserType) {
    u.age++;
}