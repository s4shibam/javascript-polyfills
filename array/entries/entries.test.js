import './entries';

const arr = ['A', 'B', 'C'];

describe('entries method', () => {
  it('should return an iterator of index-value pairs', () => {
    expect(Array.from(arr.myEntries())).toEqual([
      [0, 'A'],
      [1, 'B'],
      [2, 'C']
    ]);
  });

  it('should yield pairs in order with next()', () => {
    const iterator = arr.myEntries();

    expect(iterator.next()).toEqual({ value: [0, 'A'], done: false });
    expect(iterator.next()).toEqual({ value: [1, 'B'], done: false });
  });

  it('should return done true for an empty array', () => {
    const iterator = [].myEntries();

    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
