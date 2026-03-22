import './bind';

describe('bind method', () => {
  function greet(greeting, punctuation) {
    return `${greeting} ${this.name}${punctuation}`;
  }

  it('should return a new function with bound context', () => {
    const user = { name: 'Charlie' };
    const bound = greet.myBind(user);

    expect(bound('Hello', '!')).toBe('Hello Charlie!');
  });

  it('should support partial arguments', () => {
    const user = { name: 'Daisy' };
    const bound = greet.myBind(user, 'Hi');

    expect(bound('?')).toBe('Hi Daisy?');
  });

  it('should not execute immediately', () => {
    const spy = vi.fn(function () {
      return this.name;
    });
    const user = { name: 'Eve' };

    const bound = spy.myBind(user);

    expect(spy).not.toHaveBeenCalled();
    bound();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
