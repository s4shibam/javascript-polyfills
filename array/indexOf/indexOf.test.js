import './indexOf';

const arr = ['A', 'B', 'C', 'B'];

describe('indexOf method', () => {
  it('should return the first matching index', () => {
    expect(arr.myIndexOf('B')).toBe(1);
  });

  it('should return -1 when value is not found', () => {
    expect(arr.myIndexOf('Z')).toBe(-1);
  });

  it('should support fromIndex with positive and negative values', () => {
    expect(arr.myIndexOf('B', 2)).toBe(3);
    expect(arr.myIndexOf('B', -2)).toBe(3);
  });
});
