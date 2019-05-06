const people = [
    {
        name: "Fred",
        age: 27,
        interests: ["bowling", "golf"]
    },
    {
        name: "Wilma",
        age: 25,
        interests: ["running", "cinema"]
    },
    {
        name: "Barney",
        age: 28,
        interests: ["bowling", "running", "swimming"]
    }
];
// Explanation getNamesOfPeopleOver()
// 1.Created an empty array names.
// 2.Used a for loop to loop through the people Array.
// 3.Used if statement to check for ages greater than 26.
// 4.Pushed name of person age greater than 26 into names array using the push() method.
describe("getNamesOfPeopleOver", () => {
    const getNamesOfPeopleOver = limit => {
        let names = [];
        for (var i = 0; i < people.length; i++) {
            if (people[i].age > 26) {
                console.log(people[i].name);
                names.push(people[i].name);
            }
        }
        return names;
    };

    it("returns an array of the names of all people over the given age", () => {
        assert.deepEqual(getNamesOfPeopleOver(26), ["Fred", "Barney"]);
    });
});

// Explanation getSumOfAllAges()
// 1.Created variable sumOfAges to store values returned by the for loop.
// 2.Used a for loop to loop through array people returning values of age.
// 3.Assigned sumOfAges to the sum of values returned from the loop.

describe("getSumOfAllAges", () => {
    const getSumOfAllAges = () => {
        let sumOfAges = 0;
        for (var i = 0; i < people.length; i++) {
            sumOfAges += people[i].age;
        }

        return sumOfAges;
    };

    it("calculates the sum of all ages", () => {
        assert.equal(getSumOfAllAges(), 80);
    });
});

// Explanation getInterests
// 1.Created two empty arrays 1 to store values returned by the loop and 2 for the final array.
// 2. Used a for loop to loop through people[] returning interests.
// 3. Used second loop to loop through people.interests.
// 4. Interests are returned and stored in the array[] using the push() method.
// 5. Interests are then sorted  alphabetically using the sort() method.
// 6. A copy of the array is created using the spread operator & new Set that filters out all copies or duplicates of in the array.

describe("getInterests", () => {
    const getInterests = () => {
        let array = [];
        let unique = [];

        for (var i = 0; i < people.length; i++) {
            people[i].interests;
            if (people[i].interests) {
                for (var j = 0; j < people[i].interests.length; j++) {
                    array.push(people[i].interests[j]);
                    array.sort();
                    unique = [...new Set(array)];
                }
            }
        }
        return unique;
    };

    it("returns a array of all interests, no duplicates, sorted", () => {
        assert.deepEqual(getInterests(), [
            "bowling",
            "cinema",
            "golf",
            "running",
            "swimming"
        ]);
    });
});

// Explanation getNamesAndInterests()
// 1. Used reduce()
// 2. Passed a function to to reduce that takes an empty object and array.
// 3. Assigns properties of name as keys and and interests as values from people[].

describe("getNamesAndInterests", () => {
    const getNamesAndInterests = () => {
        const expected = people.reduce(
            (obj, item) => ((obj[item.name] = item.interests), obj),
            {}
        );
        return expected;
    };

    it("returns an object with the names as keys, and the interests as values", () => {
        const expected = {
            Fred: ["bowling", "golf"],
            Wilma: ["running", "cinema"],
            Barney: ["bowling", "running", "swimming"]
        };

        assert.deepEqual(getNamesAndInterests(), expected);
    });
});
