import './splice';

describe('splice method', () => {
  it('should remove elements and return them', () => {
    const arr = ['A', 'B', 'C', 'D'];

    const removed = arr.mySplice(1, 2);

    expect(removed).toEqual(['B', 'C']);
    expect(arr).toEqual(['A', 'D']);
  });

  it('should insert elements without removing when deleteCount is 0', () => {
    const arr = ['A', 'D'];

    const removed = arr.mySplice(1, 0, 'B', 'C');

    expect(removed).toEqual([]);
    expect(arr).toEqual(['A', 'B', 'C', 'D']);
  });

  it('should support negative start index', () => {
    const arr = [1, 2, 3, 4];

    const removed = arr.mySplice(-2, 1, 9);

    expect(removed).toEqual([3]);
    expect(arr).toEqual([1, 2, 9, 4]);
  });
});
