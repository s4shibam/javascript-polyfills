import './some';

const arr = [2, 4, 6, 7];

describe('some method', () => {
  it('should return true when at least one element matches', () => {
    expect(arr.mySome((item) => item % 2 !== 0)).toBe(true);
  });

  it('should return false when no elements match', () => {
    expect(arr.mySome((item) => item > 10)).toBe(false);
  });

  it('should pass value, index and array to the callback', () => {
    const callbackArgs = [];

    arr.mySome((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
      return false;
    });

    expect(callbackArgs).toEqual([
      [2, 0, true],
      [4, 1, true],
      [6, 2, true],
      [7, 3, true]
    ]);
  });

  it('should return false for an empty array', () => {
    expect([].mySome(() => true)).toBe(false);
  });
});
