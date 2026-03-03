import './fill';

describe('fill method', () => {
  it('should fill all elements when start and end are omitted', () => {
    const arr = [1, 2, 3];

    arr.myFill(0);
    expect(arr).toEqual([0, 0, 0]);
  });

  it('should fill between start and end indexes', () => {
    const arr = [1, 2, 3, 4, 5];

    arr.myFill(9, 1, 4);
    expect(arr).toEqual([1, 9, 9, 9, 5]);
  });

  it('should support negative start index', () => {
    const arr = [1, 2, 3, 4];

    arr.myFill(7, -2);
    expect(arr).toEqual([1, 2, 7, 7]);
  });

  it('should mutate and return the same array reference', () => {
    const arr = [1, 2, 3];

    const result = arr.myFill(5, 1);

    expect(result).toBe(arr);
    expect(arr).toEqual([1, 5, 5]);
  });
});
