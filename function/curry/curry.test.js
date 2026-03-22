import './curry';

describe('curry method', () => {
  function add(a, b, c) {
    return a + b + c;
  }

  it('should allow one argument at a time', () => {
    const curriedAdd = add.myCurry();

    expect(curriedAdd(1)(2)(3)).toBe(6);
  });

  it('should allow multiple arguments in a call', () => {
    const curriedAdd = add.myCurry();

    expect(curriedAdd(1, 2)(3)).toBe(6);
  });

  it('should preserve this context', () => {
    function sumWithBase(a, b) {
      return this.base + a + b;
    }

    const context = { base: 10 };
    const curried = sumWithBase.myCurry();

    expect(curried.call(context, 2)(3)).toBe(15);
  });
});
