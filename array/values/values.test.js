import './values';

const arr = ['A', 'B', 'C'];

describe('values method', () => {
  it('should return an iterator of values', () => {
    expect(Array.from(arr.myValues())).toEqual(['A', 'B', 'C']);
  });

  it('should yield values in order with next()', () => {
    const iterator = arr.myValues();

    expect(iterator.next()).toEqual({ value: 'A', done: false });
    expect(iterator.next()).toEqual({ value: 'B', done: false });
  });

  it('should return done true for an empty array', () => {
    const iterator = [].myValues();

    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
