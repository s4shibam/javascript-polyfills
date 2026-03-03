import './sort';

describe('sort method', () => {
  it('should sort strings in ascending order by default', () => {
    const arr = ['banana', 'apple', 'cherry'];

    arr.mySort();
    expect(arr).toEqual(['apple', 'banana', 'cherry']);
  });

  it('should sort using a compare function', () => {
    const arr = [10, 2, 30, 4];

    arr.mySort((a, b) => a - b);
    expect(arr).toEqual([2, 4, 10, 30]);
  });

  it('should mutate and return the same array reference', () => {
    const arr = [3, 1, 2];

    const result = arr.mySort((a, b) => a - b);

    expect(result).toBe(arr);
    expect(arr).toEqual([1, 2, 3]);
  });
});
