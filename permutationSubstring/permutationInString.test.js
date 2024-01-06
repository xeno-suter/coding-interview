const { isPermutationSubstring } = require('./permutationInString');

test('Example Test Case 1', () => {
    const s1 = 'ab';
    const s2 = 'eidbaooo';
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});

test('Example Test Case 2', () => {
    const s1 = 'abc';
    const s2 = 'eidbaooo';
    expect(isPermutationSubstring(s1, s2)).toBe(false);
});

test('Example Test Case 3', () => {
    const s1 = 'xyz';
    const s2 = 'eidbaooo';
    expect(isPermutationSubstring(s1, s2)).toBe(false);
});

test('Test Case 4', () => {
    const s1 = 'helo';
    const s2 = 'eollhllow';
    expect(isPermutationSubstring(s1, s2)).toBe(false);
});

test('Test Case 5', () => {
    const s1 = 'programming';
    const s2 = 'gmmaniprgorog';
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});

test('Test Case 6', () => {
    const s1 = 'algorithm';
    const s2 = 'grithmalog';
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});

test('Performance Test Case 1', () => {
    const s1 = 'a'.repeat(500000);
    const s2 = 'a'.repeat(500000);
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});

test('Performance Test Case 2', () => {
    const s1 = 'a'.repeat(500000);
    const s2 = 'b'.repeat(500000);
    expect(isPermutationSubstring(s1, s2)).toBe(false);
});

test('Performance Test Case 3', () => {
    const s1 = 'a'.repeat(250000) + 'b'.repeat(250000);
    const s2 = 'b'.repeat(250000) + 'a'.repeat(250000);
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});

test('Performance Test Case 4', () => {
    const s1 = 'abcde'.repeat(20000);
    const s2 = 'edcba'.repeat(20000);
    expect(isPermutationSubstring(s1, s2)).toBe(true);
});
