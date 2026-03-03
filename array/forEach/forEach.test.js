import './forEach';

const arr = ['A', 'B', 'C'];

describe('forEach method', () => {
  it('should execute callback for each element in order', () => {
    const values = [];

    arr.myForEach((item) => {
      values.push(item);
    });

    expect(values).toEqual(['A', 'B', 'C']);
  });

  it('should pass value, index and array to the callback', () => {
    const callbackArgs = [];

    arr.myForEach((value, index, array) => {
      callbackArgs.push([value, index, array === arr]);
    });

    expect(callbackArgs).toEqual([
      ['A', 0, true],
      ['B', 1, true],
      ['C', 2, true]
    ]);
  });

  it('should return undefined', () => {
    expect(arr.myForEach(() => {})).toBeUndefined();
  });

  it('should not mutate the array unless callback mutates it', () => {
    arr.myForEach(() => {});
    expect(arr).toEqual(['A', 'B', 'C']);
  });
});
