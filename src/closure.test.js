// Explanation multiplier()
// 1. multiplier() takes a argument num and returns the value multiplied by 3.

describe("multiplier", () => {
    const multiplier = num => {
        return () => {
            return num * 3;
        };
    };

    describe("when given a number, a function is returned which when called", () => {
        it("returns the multiplication of the two numbers", () => {
            const times12 = multiplier(12);

            assert.equal(times12(3), 36);
        });
    });
});

// Explanation counter()
// 1. Created a variable number to store values returned when count() is called.
// 2. When count is called the value stored in num is increased by 1 each time.

describe("counter", () => {
    let number = 0;
    const count = () => {
        return number++;
    };

    it("returns an increasing number each time it is called", () => {
        assert.equal(count(), 0);
        assert.equal(count(), 1);
        assert.equal(count(), 2);
    });
});
