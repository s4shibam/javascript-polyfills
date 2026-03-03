import './flatMap';

const arr = [1, 2, 3];

describe('flatMap method', () => {
  it('should map and flatten one level', () => {
    expect(arr.myFlatMap((item) => [item, item * 2])).toEqual([1, 2, 2, 4, 3, 6]);
  });

  it('should pass value, index and array to the callback', () => {
    const callbackArgs = [];

    arr.myFlatMap((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
      return [value];
    });

    expect(callbackArgs).toEqual([
      [1, 0, true],
      [2, 1, true],
      [3, 2, true]
    ]);
  });

  it('should not mutate the original array', () => {
    arr.myFlatMap((item) => [item]);
    expect(arr).toEqual([1, 2, 3]);
  });
});
