import './lastIndexOf';

const arr = ['A', 'B', 'C', 'B'];

describe('lastIndexOf method', () => {
  it('should return the last matching index', () => {
    expect(arr.myLastIndexOf('B')).toBe(3);
  });

  it('should return -1 when value is not found', () => {
    expect(arr.myLastIndexOf('Z')).toBe(-1);
  });

  it('should support fromIndex', () => {
    expect(arr.myLastIndexOf('B', 2)).toBe(1);
  });
});
