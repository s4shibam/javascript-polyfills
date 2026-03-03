import './pop';

describe('pop method', () => {
  it('should remove and return the last element', () => {
    const arr = ['A', 'B', 'C'];

    expect(arr.myPop()).toBe('C');
    expect(arr).toEqual(['A', 'B']);
  });

  it('should update array length after removing an item', () => {
    const arr = ['A', 'B', 'C'];

    arr.myPop();
    expect(arr.length).toBe(2);
  });

  it('should return undefined for an empty array', () => {
    const arr = [];

    expect(arr.myPop()).toBeUndefined();
    expect(arr).toEqual([]);
  });

  it('should remove only one item per call', () => {
    const arr = ['A', 'B', 'C'];

    arr.myPop();
    expect(arr).toEqual(['A', 'B']);
  });
});
