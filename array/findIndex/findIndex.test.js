import './findIndex';

const arr = [4, 6, 8, 9, 12];

describe('findIndex method', () => {
  it('should return the index of the first matching element', () => {
    expect(arr.myFindIndex((item) => item % 2 !== 0)).toBe(3);
  });

  it('should return -1 when no element matches', () => {
    expect(arr.myFindIndex((item) => item > 20)).toBe(-1);
  });

  it('should pass value, index and array to the predicate', () => {
    const callbackArgs = [];

    arr.myFindIndex((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
      return false;
    });

    expect(callbackArgs).toEqual([
      [4, 0, true],
      [6, 1, true],
      [8, 2, true],
      [9, 3, true],
      [12, 4, true]
    ]);
  });
});
