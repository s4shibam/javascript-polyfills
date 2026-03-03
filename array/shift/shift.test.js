import './shift';

describe('shift method', () => {
  it('should remove and return the first element', () => {
    const arr = ['A', 'B', 'C'];

    expect(arr.myShift()).toBe('A');
    expect(arr).toEqual(['B', 'C']);
  });

  it('should update length after removing an item', () => {
    const arr = ['A', 'B', 'C'];

    arr.myShift();
    expect(arr.length).toBe(2);
  });

  it('should return undefined for an empty array', () => {
    const arr = [];

    expect(arr.myShift()).toBeUndefined();
    expect(arr).toEqual([]);
  });
});
