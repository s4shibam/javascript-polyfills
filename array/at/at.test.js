import './at';

const arr = ['A', 'B', 'C', 'D', 'E'];

describe('at method', () => {
  it('should return the correct element for a positive index', () => {
    expect(arr.myAt(3)).toBe('D');
  });

  it('should return undefined for a positive index out of range', () => {
    expect(arr.myAt(5)).toBeUndefined();
  });

  it('should return the correct element for a negative index', () => {
    expect(arr.myAt(-1)).toBe('E');
  });

  it('should return the correct element for the lowest valid negative index', () => {
    expect(arr.myAt(-5)).toBe('A');
  });

  it('should return undefined for a negative index out of range', () => {
    expect(arr.myAt(-6)).toBeUndefined();
  });
});
