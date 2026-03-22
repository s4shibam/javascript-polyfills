import './apply';

describe('apply method', () => {
  function fullName(greeting, punctuation) {
    return `${greeting} ${this.firstName} ${this.lastName}${punctuation}`;
  }

  it('should call a function with provided context and argument array', () => {
    const user = { firstName: 'John', lastName: 'Doe' };

    const result = fullName.myApply(user, ['Hello', '!']);

    expect(result).toBe('Hello John Doe!');
  });

  it('should work with an empty argument array', () => {
    function getName() {
      return `${this.firstName} ${this.lastName}`;
    }

    const user = { firstName: 'Jane', lastName: 'Doe' };

    expect(getName.myApply(user, [])).toBe('Jane Doe');
  });
});
