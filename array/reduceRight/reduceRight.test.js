import './reduceRight';

describe('reduceRight method', () => {
  it('should reduce from right to left with an initial value', () => {
    const arr = ['A', 'B', 'C'];

    const result = arr.myReduceRight((acc, item) => acc + item, '');
    expect(result).toBe('CBA');
  });

  it('should reduce from right to left without an initial value', () => {
    const arr = [1, 2, 3, 4];

    const result = arr.myReduceRight((acc, item) => acc - item);
    expect(result).toBe(-2);
  });

  it('should pass accumulator, value, index and array to the callback', () => {
    const arr = [1, 2, 3];
    const callbackArgs = [];

    arr.myReduceRight((acc, value, index, array) => {
      callbackArgs.push([acc, value, index, array === arr]);
      return acc + value;
    }, 0);

    expect(callbackArgs).toEqual([
      [0, 3, 2, true],
      [3, 2, 1, true],
      [5, 1, 0, true]
    ]);
  });

  it('should throw for an empty array without an initial value', () => {
    expect(() => [].myReduceRight((acc, item) => acc + item)).toThrow(TypeError);
  });
});
