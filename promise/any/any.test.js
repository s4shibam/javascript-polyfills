import './any';

describe('any method', () => {
  function getMyAny() {
    expect(typeof Promise.myAny).toBe('function');
    return Promise.myAny.bind(Promise);
  }

  it('should resolve with the first fulfilled promise', async () => {
    const myAny = getMyAny();
    const values = [Promise.reject('error'), Promise.resolve('success')];

    await expect(myAny(values)).resolves.toBe('success');
  });

  it('should reject when all promises reject', async () => {
    const myAny = getMyAny();
    const values = [Promise.reject('e1'), Promise.reject('e2')];

    await expect(myAny(values)).rejects.toBeInstanceOf(AggregateError);
  });
});
