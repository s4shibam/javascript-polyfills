import './resolve';

describe('resolve method', () => {
  it('should resolve a non-promise value', async () => {
    await expect(Promise.myResolve(10)).resolves.toBe(10);
  });

  it('should resolve an existing promise value', async () => {
    const value = Promise.resolve(20);

    await expect(Promise.myResolve(value)).resolves.toBe(20);
  });
});
