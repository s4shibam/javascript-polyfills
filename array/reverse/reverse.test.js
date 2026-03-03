import './reverse';

describe('reverse method', () => {
  it('should reverse array elements in place', () => {
    const arr = [1, 2, 3, 4];

    arr.myReverse();
    expect(arr).toEqual([4, 3, 2, 1]);
  });

  it('should return the same array reference', () => {
    const arr = [1, 2, 3];

    const result = arr.myReverse();

    expect(result).toBe(arr);
    expect(arr).toEqual([3, 2, 1]);
  });

  it('should work for an empty array', () => {
    const arr = [];

    expect(arr.myReverse()).toEqual([]);
  });
});
