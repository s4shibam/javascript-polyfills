import './every';

const arr = [1, 2, 3, 4];

describe('every method', () => {
  it('should return true when all items satisfy the predicate', () => {
    expect(arr.myEvery((item) => item > 0)).toBe(true);
  });

  it('should return false when at least one item does not satisfy the predicate', () => {
    expect(arr.myEvery((item) => item < 4)).toBe(false);
  });

  it('should return true for an empty array', () => {
    expect([].myEvery(() => false)).toBe(true);
  });
});