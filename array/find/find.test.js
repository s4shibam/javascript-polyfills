import './find';

const arr = [4, 6, 8, 9, 12];

describe('find method', () => {
  it('should return the first matching element', () => {
    expect(arr.myFind((item) => item % 2 !== 0)).toBe(9);
  });

  it('should return undefined when no element matches', () => {
    expect(arr.myFind((item) => item > 20)).toBeUndefined();
  });

  it('should stop iterating after finding the first match', () => {
    let calls = 0;

    const result = arr.myFind((item) => {
      calls++;
      return item > 7;
    });

    expect(result).toBe(8);
    expect(calls).toBe(3);
  });

  it('should pass value, index and array to the predicate', () => {
    const callbackArgs = [];

    arr.myFind((value, index, array) => {
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
