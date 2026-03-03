import './flat';

const arr = [1, [2, 3], [4, [5, 6]]];

describe('flat method', () => {
  it('should flatten one level by default', () => {
    expect(arr.myFlat()).toEqual([1, 2, 3, 4, [5, 6]]);
  });

  it('should flatten to the provided depth', () => {
    expect(arr.myFlat(2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return a copy when depth is 0', () => {
    const result = arr.myFlat(0);

    expect(result).toEqual([1, [2, 3], [4, [5, 6]]]);
    expect(result).not.toBe(arr);
  });

  it('should not mutate the original array', () => {
    arr.myFlat(2);
    expect(arr).toEqual([1, [2, 3], [4, [5, 6]]]);
  });
});
