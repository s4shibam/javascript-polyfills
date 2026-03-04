import './all';

describe('all method', () => {
  function getMyAll() {
    expect(typeof Promise.myAll).toBe('function');
    return Promise.myAll.bind(Promise);
  }

  it('should resolve all values in order', async () => {
    const myAll = getMyAll();
    const values = [Promise.resolve(1), 2, Promise.resolve(3)];

    await expect(myAll(values)).resolves.toEqual([1, 2, 3]);
  });

  it('should reject when any promise rejects', async () => {
    const myAll = getMyAll();
    const values = [Promise.resolve(1), Promise.reject('boom'), Promise.resolve(3)];

    await expect(myAll(values)).rejects.toBe('boom');
  });

  it('should resolve empty input as empty array', async () => {
    const myAll = getMyAll();

    await expect(myAll([])).resolves.toEqual([]);
  });
});
