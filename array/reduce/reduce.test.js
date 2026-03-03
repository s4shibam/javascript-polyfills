import './reduce';

const arr = [1, 2, 3, 4];

describe('reduce method', () => {
  it('should reduce with an initial value', () => {
    const result = arr.myReduce((acc, item) => acc + item, 10);
    expect(result).toBe(20);
  });

  it('should reduce without an initial value', () => {
    const result = arr.myReduce((acc, item) => acc + item);
    expect(result).toBe(10);
  });

  it('should pass accumulator, value, index and array to the callback', () => {
    const callbackArgs = [];

    arr.myReduce((acc, value, index, array) => {
      callbackArgs.push([acc, value, index, array === arr]);
      return acc + value;
    }, 0);

    expect(callbackArgs).toEqual([
      [0, 1, 0, true],
      [1, 2, 1, true],
      [3, 3, 2, true],
      [6, 4, 3, true]
    ]);
  });

  it('should throw for an empty array without an initial value', () => {
    expect(() => [].myReduce((acc, item) => acc + item)).toThrow(TypeError);
  });
});
