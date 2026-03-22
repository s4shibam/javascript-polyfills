import './call';

describe('call method', () => {
  function greet(greeting, punctuation) {
    return `${greeting} ${this.name}${punctuation}`;
  }

  it('should call a function with provided context and arguments', () => {
    const user = { name: 'Alice' };

    const result = greet.myCall(user, 'Hi', '!');

    expect(result).toBe('Hi Alice!');
  });

  it('should work when no extra arguments are provided', () => {
    function getName() {
      return this.name;
    }

    const user = { name: 'Bob' };

    expect(getName.myCall(user)).toBe('Bob');
  });
});
