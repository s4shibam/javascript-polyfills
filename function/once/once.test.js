import './once';

describe('once method', () => {
  it('should call the original function only once', () => {
    const spy = vi.fn((value) => value * 2);
    const runOnce = spy.myOnce();

    expect(runOnce(2)).toBe(4);
    expect(runOnce(5)).toBe(4);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should preserve this context and arguments for the first call', () => {
    const user = {
      name: 'Sam',
      getName(prefix) {
        return `${prefix} ${this.name}`;
      }
    };

    const runOnce = user.getName.myOnce();

    expect(runOnce.call(user, 'Mr.')).toBe('Mr. Sam');
    expect(runOnce.call({ name: 'Tom' }, 'Mr.')).toBe('Mr. Sam');
  });
});
