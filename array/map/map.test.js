import './map';

const arr = [1, 2, 3];

describe('map method', () => {
  it('should return a new array with transformed values', () => {
    expect(arr.myMap((item) => item * 2)).toEqual([2, 4, 6]);
  });

  it('should preserve array length', () => {
    expect(arr.myMap((item) => item + 1).length).toBe(arr.length);
  });

  it('should pass value, index and array to the callback', () => {
    const callbackArgs = [];

    arr.myMap((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
      return value;
    });

    expect(callbackArgs).toEqual([
      [1, 0, true],
      [2, 1, true],
      [3, 2, true]
    ]);
  });

  it('should not mutate the original array', () => {
    arr.myMap((item) => item + 10);
    expect(arr).toEqual([1, 2, 3]);
  });
});
