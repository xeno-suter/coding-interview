const { minCostClimbingStairs } = require('./minCostClimbingStairs');

test('Case 1', () => {
    const cost = [10, 15, 20];
    expect(minCostClimbingStairs(cost)).toBe(15);
});

test('Case 2', () => {
    const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
    expect(minCostClimbingStairs(cost)).toBe(6);
});

test('Case 3', () => {
    const cost = [0, 0, 0, 0];
    expect(minCostClimbingStairs(cost)).toBe(0);
});

test('Case 4', () => {
    const cost = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(minCostClimbingStairs(cost)).toBe(16);
});

test('Performance Test Case 1', () => {
    const cost = Array.from({ length: 1000 }, (_, index) => index + 1);
    expect(minCostClimbingStairs(cost)).toBe(250000);
});

test('Performance Test Case 2', () => {
    const cost = Array.from({ length: 10000 }, (_, index) => index + 1);
    expect(minCostClimbingStairs(cost)).toBe(25000000);
});

test('Performance Test Case 3', () => {
    const cost = Array.from({ length: 50000 }, (_, index) => index + 1);
    expect(minCostClimbingStairs(cost)).toBe(625000000);
});
