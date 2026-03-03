import './filter';

const arr = [1, 2, 3, 4, 5];

describe('filter method', () => {
  it('should return a new array with matching elements', () => {
    expect(arr.myFilter((item) => item % 2 === 0)).toEqual([2, 4]);
  });

  it('should return an empty array when no elements match', () => {
    expect(arr.myFilter((item) => item > 10)).toEqual([]);
  });

  it('should pass value, index and array to the predicate', () => {
    const callbackArgs = [];

    arr.myFilter((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
      return false;
    });

    expect(callbackArgs).toEqual([
      [1, 0, true],
      [2, 1, true],
      [3, 2, true],
      [4, 3, true],
      [5, 4, true]
    ]);
  });

  it('should not mutate the original array', () => {
    arr.myFilter((item) => item > 2);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
});
