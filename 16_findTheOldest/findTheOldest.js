const findTheOldest = function(people) {
    const nameAge = people.map(person => {
    const currentAge = person.yearOfDeath === undefined
        ? 2025 - person.yearOfBirth
        : person.yearOfDeath - person.yearOfBirth;
        console.log(person.name);
        console.log(currentAge);
    return {
        name: person.name,
        age: currentAge
        };
    });
    console.log(nameAge)
    const oldestPerson = nameAge.reduce((max,num) => num.age > max.age ? num : max);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
