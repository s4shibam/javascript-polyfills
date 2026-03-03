import './includes';

const arr = ['A', 'B', 'C', 'D'];

describe('includes method', () => {
  it('should return true when the value exists in the array', () => {
    expect(arr.myIncludes('C')).toBe(true);
  });

  it('should return false when the value does not exist in the array', () => {
    expect(arr.myIncludes('Z')).toBe(false);
  });

  it('should support fromIndex', () => {
    expect(arr.myIncludes('B', 2)).toBe(false);
    expect(arr.myIncludes('D', 2)).toBe(true);
  });

  it('should treat NaN as equal to NaN', () => {
    expect([1, NaN, 3].myIncludes(NaN)).toBe(true);
  });
});
