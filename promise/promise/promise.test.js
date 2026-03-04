import MyPromise from './promise';

describe('MyPromise - constructor', () => {
  it('should expose a constructor function', () => {
    expect(typeof MyPromise).toBe('function');
  });

  it('should resolve with a value from executor', async () => {
    const p = new MyPromise((resolve) => resolve(42));
    await expect(p).resolves.toBe(42);
  });

  it('should reject with a reason from executor', async () => {
    const p = new MyPromise((_, reject) => reject('error'));
    await expect(p).rejects.toBe('error');
  });

  it('should reject when executor throws synchronously', async () => {
    const p = new MyPromise(() => {
      throw new Error('sync throw');
    });
    await expect(p).rejects.toThrow('sync throw');
  });

  it('should resolve asynchronously', async () => {
    const p = new MyPromise((resolve) => {
      setTimeout(() => resolve('async value'), 10);
    });
    await expect(p).resolves.toBe('async value');
  });

  it('should reject asynchronously', async () => {
    const p = new MyPromise((_, reject) => {
      setTimeout(() => reject('async error'), 10);
    });
    await expect(p).rejects.toBe('async error');
  });

  it('should only settle once — resolve wins over reject', async () => {
    const p = new MyPromise((resolve, reject) => {
      resolve('first');
      reject('second');
    });
    await expect(p).resolves.toBe('first');
  });

  it('should only settle once — reject wins over resolve', async () => {
    const p = new MyPromise((resolve, reject) => {
      reject('first');
      resolve('second');
    });
    await expect(p).rejects.toBe('first');
  });
});

describe('MyPromise - .then()', () => {
  it('should call onFulfilled with resolved value', async () => {
    const result = await new MyPromise((resolve) => resolve(10)).then(
      (v) => v * 2
    );
    expect(result).toBe(20);
  });

  it('should call onRejected with rejection reason', async () => {
    const result = await new MyPromise((_, reject) => reject('oops')).then(
      null,
      (reason) => `caught: ${reason}`
    );
    expect(result).toBe('caught: oops');
  });

  it('should chain .then() calls and pass values through', async () => {
    const result = await new MyPromise((resolve) => resolve(1))
      .then((v) => v + 1)
      .then((v) => v + 1)
      .then((v) => v + 1);
    expect(result).toBe(4);
  });

  it('should unwrap a returned promise in .then()', async () => {
    const result = await new MyPromise((resolve) => resolve(5)).then(
      (v) => new MyPromise((resolve) => resolve(v * 10))
    );
    expect(result).toBe(50);
  });

  it('should propagate rejection when onFulfilled throws', async () => {
    const p = new MyPromise((resolve) => resolve('ok')).then(() => {
      throw new Error('then threw');
    });
    await expect(p).rejects.toThrow('then threw');
  });

  it('should skip onFulfilled and propagate rejection down the chain', async () => {
    const p = new MyPromise((_, reject) => reject('bad'))
      .then((v) => v)
      .then((v) => v);
    await expect(p).rejects.toBe('bad');
  });

  it('should recover from rejection using onRejected in chain', async () => {
    const result = await new MyPromise((_, reject) => reject('fail'))
      .then(null, () => 'recovered')
      .then((v) => `${v}!`);
    expect(result).toBe('recovered!');
  });

  it('should handle undefined onFulfilled gracefully', async () => {
    const p = new MyPromise((resolve) => resolve(99)).then(undefined);
    await expect(p).resolves.toBe(99);
  });

  it('should return a new promise instance from .then()', () => {
    const p = new MyPromise((resolve) => resolve(1));
    const chained = p.then((v) => v);
    expect(chained).not.toBe(p);
    expect(typeof chained.then).toBe('function');
  });
});

describe('MyPromise - .catch()', () => {
  it('should catch a rejected promise', async () => {
    const result = await new MyPromise((_, reject) => reject('caught!')).catch(
      (reason) => reason
    );
    expect(result).toBe('caught!');
  });

  it('should catch an error thrown in executor', async () => {
    const result = await new MyPromise(() => {
      throw new Error('boom');
    }).catch((e) => e.message);
    expect(result).toBe('boom');
  });

  it('should catch an error thrown inside .then()', async () => {
    const result = await new MyPromise((resolve) => resolve('ok'))
      .then(() => {
        throw new Error('then error');
      })
      .catch((e) => e.message);
    expect(result).toBe('then error');
  });

  it('should not call .catch() when promise resolves', async () => {
    const catchFn = vi.fn();
    await new MyPromise((resolve) => resolve('fine')).catch(catchFn);
    expect(catchFn).not.toHaveBeenCalled();
  });

  it('should propagate rejection if .catch() handler throws', async () => {
    const p = new MyPromise((_, reject) => reject('err')).catch(() => {
      throw new Error('catch rethrew');
    });
    await expect(p).rejects.toThrow('catch rethrew');
  });

  it('should allow chaining after .catch()', async () => {
    const result = await new MyPromise((_, reject) => reject('oops'))
      .catch(() => 'fallback')
      .then((v) => `${v} value`);
    expect(result).toBe('fallback value');
  });
});

describe('MyPromise - .finally()', () => {
  it('should call the callback when promise resolves', async () => {
    const finallyFn = vi.fn();
    await new MyPromise((resolve) => resolve('done')).finally(finallyFn);
    expect(finallyFn).toHaveBeenCalledTimes(1);
  });

  it('should call the callback when promise rejects', async () => {
    const finallyFn = vi.fn();
    await new MyPromise((_, reject) => reject('fail'))
      .finally(finallyFn)
      .catch(() => {});
    expect(finallyFn).toHaveBeenCalledTimes(1);
  });

  it('should not receive any argument in the callback', async () => {
    let received;
    await new MyPromise((resolve) => resolve(42)).finally((...args) => {
      received = args;
    });
    expect(received).toHaveLength(0);
  });

  it('should pass through the resolved value after .finally()', async () => {
    const result = await new MyPromise((resolve) => resolve(7))
      .finally(() => {})
      .then((v) => v);
    expect(result).toBe(7);
  });

  it('should pass through the rejection reason after .finally()', async () => {
    const p = new MyPromise((_, reject) => reject('propagated')).finally(
      () => {}
    );
    await expect(p).rejects.toBe('propagated');
  });

  it('should override resolved value if .finally() throws', async () => {
    const p = new MyPromise((resolve) => resolve('ok')).finally(() => {
      throw new Error('finally error');
    });
    await expect(p).rejects.toThrow('finally error');
  });
});

describe('MyPromise - edge cases', () => {
  it('should support multiple .then() handlers on the same promise (fan-out)', async () => {
    const p = new MyPromise((resolve) => resolve(10));
    const [r1, r2] = await Promise.all([
      p.then((v) => v + 1),
      p.then((v) => v + 2),
    ]);
    expect(r1).toBe(11);
    expect(r2).toBe(12);
  });

  it('should unwrap a MyPromise passed to resolve() in the executor', async () => {
    const inner = new MyPromise((resolve) => resolve(99));
    const outer = new MyPromise((resolve) => resolve(inner));
    await expect(outer).resolves.toBe(99);
  });

  it('should pass through rejection when both .then() handlers are undefined', async () => {
    const p = new MyPromise((_, reject) => reject('pass-through')).then(
      undefined,
      undefined
    );
    await expect(p).rejects.toBe('pass-through');
  });

  it('should resolve with falsy values correctly', async () => {
    await expect(new MyPromise((r) => r(null))).resolves.toBeNull();
    await expect(new MyPromise((r) => r(0))).resolves.toBe(0);
    await expect(new MyPromise((r) => r(false))).resolves.toBe(false);
    await expect(new MyPromise((r) => r(undefined))).resolves.toBeUndefined();
  });
});
