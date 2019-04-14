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

function getNamesAndInterests() {
    var obj = {};

    people.map(item => (obj[Object.values(item)] = item[Object.values(item)]));

    console.log(obj);
    // var obj = {};
    // for (var i in people) {
    //     obj[Object.values(people[i])] = people[i][Object.values(people[i])];
    // }
    //     let obj = {};
    //    let obj = Object.assign({}, ...people);
    // console.log(obj);
    //    let objNI = obj.name + obj.interests;
    return obj;
}
getNamesAndInterests();

// function getInterests() {
//     let array = [];
//     let unique = [];
//
//     for (var i = 0; i < people.length; i++) {
//         people[i].interests;
//         if (people[i].interests) {
//             for (var j = 0; j < people[i].interests.length; j++) {
//                 // console.log(people[i].interests[j]);
//                 array.push(people[i].interests[j]);
//                 array.sort();
//                 unique = [...new Set(array)];
//             }
//         }
//     }
//     return unique;
// }
// getInterests();
//
// var resArr = [];
// people.forEach(function(item) {
//     resArr.push(item.interests);
// });
//
// console.log(resArr);
//
// function getInterests() {
//     let interestsArray = [];
//     for (var i = 0; i < people.length; i++) {
//         interestsArray.push(people[i].interests);
//         interestsArray.sort();
//     }
//     return interestsArray;
// }
//
// getInterests();
// let newArray = interestsArray.map(getInterests);
// console.log(newArray);
// describe("getInterests", () => {
//     const getInterests = () => {
//         // TODO: Complete this function to allow the test to pass
//     };
//
//     it("returns a array of all interests, no duplicates, sorted", () => {
//         assert.deepEqual(getInterests(), [
//             "bowling",
//             "cinema",
//             "golf",
//             "running",
//             "swimming"
//         ]);
//     });
// });

// function limit() {
//     let names = [];
//     for (var i = 0; i < people.length; i++) {
//         if (people[i].age > 26) {
//             console.log(people[i].name);
//             names.push(people[i].name);
//         }
//     }
//     return names;
// }
// limit();

// describe("getSumOfAllAges", () => {
//     const getSumOfAllAges = () => {
//         // TODO: Complete this function to allow the test to pass
//     };
//
//     it("calculates the sum of all ages", () => {
//         assert.equal(getSumOfAllAges(), 80);
//     });
// });

// function getSumOfAllAges() {
//     let sumOfAges = 0;
//     for (var i = 0; i < people.length; i++) {
//         sumOfAges += people[i].age;
//     }
//
//     return sumOfAges;
// }
// getSumOfAllAges();
// function getRandomValue(min = 0, max = 1) {
//     return Math.random();
//     // TODO: Complete this function to allow the test to pass
// }
// getRandomValue();
function multiplier(number) {
    let times12 = 12;

    return number * times12;

    // TODO: Complete this function to allow the test to pass
}
multiplier(3);
