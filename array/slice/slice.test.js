import './slice';

const arr = ['A', 'B', 'C', 'D'];

describe('slice method', () => {
  it('should return a shallow copy when called without arguments', () => {
    const result = arr.mySlice();

    expect(result).toEqual(['A', 'B', 'C', 'D']);
    expect(result).not.toBe(arr);
  });

  it('should return a sliced portion using start and end', () => {
    expect(arr.mySlice(1, 3)).toEqual(['B', 'C']);
  });

  it('should support negative start', () => {
    expect(arr.mySlice(-2)).toEqual(['C', 'D']);
  });

  it('should not mutate the original array', () => {
    arr.mySlice(1, 3);
    expect(arr).toEqual(['A', 'B', 'C', 'D']);
  });
});
