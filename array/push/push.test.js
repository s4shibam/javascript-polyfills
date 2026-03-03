import './push';

describe('push method', () => {
  it('should return updated length and append a single item', () => {
    const arr = ['A', 'B', 'C'];

    expect(arr.myPush('D')).toBe(4);
    expect(arr).toEqual(['A', 'B', 'C', 'D']);
  });

  it('should return updated length and append multiple items in order', () => {
    const arr = ['A', 'B', 'C'];

    expect(arr.myPush('D', 'E')).toBe(5);
    expect(arr).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  it('should return current length when no items are provided', () => {
    const arr = ['A', 'B', 'C'];

    expect(arr.myPush()).toBe(3);
    expect(arr).toEqual(['A', 'B', 'C']);
  });

  it('should return updated length and append to an empty array', () => {
    const arr = [];

    expect(arr.myPush('A')).toBe(1);
    expect(arr).toEqual(['A']);
  });
});
