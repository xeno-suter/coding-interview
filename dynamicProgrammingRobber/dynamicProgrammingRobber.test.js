const { dynamicProgrammingRobber } = require('./dynamicProgrammingRobber');

test('Example Test Case 1', () => {
    const houses = [2, 7, 9, 3, 1];
    expect(dynamicProgrammingRobber(houses)).toBe(12);
});

test('Example Test Case 2', () => {
    const houses = [1, 2, 3, 1];
    expect(dynamicProgrammingRobber(houses)).toBe(4);
});

test('Example Test Case 3', () => {
    const houses = [2, 1, 1, 2];
    expect(dynamicProgrammingRobber(houses)).toBe(4);
});

test('Test Case 4', () => {
    const houses = [6, 7, 1, 30, 8, 2, 4];
    expect(dynamicProgrammingRobber(houses)).toBe(41);
});

test('Test Case 5', () => {
    const houses = [1, 2, 3, 4, 5, 6];
    expect(dynamicProgrammingRobber(houses)).toBe(12);
});

test('Test Case 6', () => {
    const houses = [5, 1, 2, 6];
    expect(dynamicProgrammingRobber(houses)).toBe(11);
});

test('Test Case 7', () => {
    const houses = [4, 1, 2, 7, 5, 3, 1];
    expect(dynamicProgrammingRobber(houses)).toBe(14);
});

test('Performance Test Case 1', () => {
    const houses = Array.from({ length: 1000 }, (_, index) => index + 1);
    expect(dynamicProgrammingRobber(houses)).toBe(250500);
});

test('Performance Test Case 2', () => {
    const houses = Array.from({ length: 10000 }, (_, index) => index + 1);
    expect(dynamicProgrammingRobber(houses)).toBe(25005000);
});

test('Performance Test Case 3', () => {
    const houses = Array.from({ length: 50000 }, (_, index) => index + 1);
    expect(dynamicProgrammingRobber(houses)).toBe(625025000);
});

test('Performance Test Case 4', () => {
    const houses = Array.from({ length: 100000 }, (_, index) => index + 1);
    expect(dynamicProgrammingRobber(houses)).toBe(2500050000);
});