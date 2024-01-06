const { climbingStairs } = require('./climbingStairs');

test('Case 1', () => {
    const stairs = 2;
    expect(climbingStairs(stairs)).toBe(2);
});

test('Case 2', () => {
    const stairs = 3;
    expect(climbingStairs(stairs)).toBe(3);
});

test('Case 3', () => {
    const stairs = 4;
    expect(climbingStairs(stairs)).toBe(5);
});

test('Case 4', () => {
    const stairs = 5;
    expect(climbingStairs(stairs)).toBe(8);
});

test('Case 5', () => {
    const stairs = 6;
    expect(climbingStairs(stairs)).toBe(13);
});

test('Performance Test Case 1', () => {
    const stairs = 20;
    expect(climbingStairs(stairs)).toBe(10946);
});

test('Performance Test Case 2', () => {
    const stairs = 30;
    expect(climbingStairs(stairs)).toBe(1346269);
});

test('Performance Test Case 3', () => {
    const stairs = 40;
    expect(climbingStairs(stairs)).toBe(165580141);
});
