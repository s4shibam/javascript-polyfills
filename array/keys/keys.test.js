import './keys';

const arr = ['A', 'B', 'C'];

describe('keys method', () => {
  it('should return an iterator of indexes', () => {
    expect(Array.from(arr.myKeys())).toEqual([0, 1, 2]);
  });

  it('should yield indexes in order with next()', () => {
    const iterator = arr.myKeys();

    expect(iterator.next()).toEqual({ value: 0, done: false });
    expect(iterator.next()).toEqual({ value: 1, done: false });
  });

  it('should return done true for an empty array', () => {
    const iterator = [].myKeys();

    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
