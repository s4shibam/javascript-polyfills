import './unshift';

describe('unshift method', () => {
  it('should prepend a single element and return new length', () => {
    const arr = ['B', 'C'];

    expect(arr.myUnshift('A')).toBe(3);
    expect(arr).toEqual(['A', 'B', 'C']);
  });

  it('should prepend multiple elements in order and return new length', () => {
    const arr = ['C'];

    expect(arr.myUnshift('A', 'B')).toBe(3);
    expect(arr).toEqual(['A', 'B', 'C']);
  });

  it('should return current length when no elements are provided', () => {
    const arr = ['A', 'B'];

    expect(arr.myUnshift()).toBe(2);
    expect(arr).toEqual(['A', 'B']);
  });
});
