import './join';

describe('join method', () => {
  it('should join with a comma when separator is omitted', () => {
    expect(['A', 'B', 'C'].myJoin()).toBe('A,B,C');
  });

  it('should join with the provided separator', () => {
    expect(['A', 'B', 'C'].myJoin('-')).toBe('A-B-C');
  });

  it('should treat null and undefined as empty strings', () => {
    expect([1, null, undefined, 4].myJoin('-')).toBe('1---4');
  });
});
