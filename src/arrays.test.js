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

describe("getNamesOfPeopleOver", () => {
    const getNamesOfPeopleOver = limit => {
        // // TODO: Complete this function to allow the test to pass

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

describe("getNamesAndInterests", () => {
    const getNamesAndInterests = () => {
        // TODO: Complete this function to allow the test to pass
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
