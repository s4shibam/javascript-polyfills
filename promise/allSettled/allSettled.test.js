import './allSettled';

describe('allSettled method', () => {
  function getMyAllSettled() {
    expect(typeof Promise.myAllSettled).toBe('function');
    return Promise.myAllSettled.bind(Promise);
  }

  it('should return status objects for all promises', async () => {
    const myAllSettled = getMyAllSettled();
    const values = [Promise.resolve(1), Promise.reject('error')];

    await expect(myAllSettled(values)).resolves.toEqual([
      { status: 'fulfilled', value: 1 },
      { status: 'rejected', reason: 'error' }
    ]);
  });

  it('should resolve empty input as empty array', async () => {
    const myAllSettled = getMyAllSettled();

    await expect(myAllSettled([])).resolves.toEqual([]);
  });
});
