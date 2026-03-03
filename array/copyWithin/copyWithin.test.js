import './copyWithin';

describe('copyWithin method', () => {
  it('should copy a sequence within the same array', () => {
    const arr = [1, 2, 3, 4, 5];

    arr.myCopyWithin(0, 3);
    expect(arr).toEqual([4, 5, 3, 4, 5]);
  });

  it('should support target, start and end arguments', () => {
    const arr = [1, 2, 3, 4, 5];

    arr.myCopyWithin(1, 3, 4);
    expect(arr).toEqual([1, 4, 3, 4, 5]);
  });

  it('should support negative indexes', () => {
    const arr = [1, 2, 3, 4, 5];

    arr.myCopyWithin(-2, 0, 2);
    expect(arr).toEqual([1, 2, 3, 1, 2]);
  });

  it('should mutate and return the same array reference', () => {
    const arr = [1, 2, 3];

    const result = arr.myCopyWithin(1, 0, 1);

    expect(result).toBe(arr);
    expect(arr).toEqual([1, 1, 3]);
  });
});
