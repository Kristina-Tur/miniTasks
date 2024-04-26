const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA',
    },
};

const updatedUser = {...user, address: {...user.address, city: 'Toronto'}}
console.log(updatedUser)