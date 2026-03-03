import './concat';

const arr = ['A', 'B', 'C'];

describe('concat method', () => {
  it('should return a new array when concatenating another array', () => {
    expect(arr.myConcat(['D', 'E'])).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('should concatenate non-array values as single elements', () => {
    expect(arr.myConcat('D', 'E')).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('should concatenate multiple arrays and values in order', () => {
    expect(arr.myConcat(['D'], 'E', ['F', 'G'])).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G'
    ]);
  });

  it('should keep nested arrays nested', () => {
    expect(arr.myConcat([['D']])).toEqual(['A', 'B', 'C', ['D']]);
  });

  it('should not mutate the original array', () => {
    arr.myConcat(['D']);
    expect(arr).toEqual(['A', 'B', 'C']);
  });

  it('should return a new array reference when called with no arguments', () => {
    const result = arr.myConcat();

    expect(result).toEqual(['A', 'B', 'C']);
    expect(result).not.toBe(arr);
  });
});
