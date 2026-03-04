import './race';

describe('race method', () => {
  function getMyRace() {
    expect(typeof Promise.myRace).toBe('function');
    return Promise.myRace.bind(Promise);
  }

  it('should resolve with the first settled resolved promise', async () => {
    const myRace = getMyRace();
    const fast = Promise.resolve('fast');
    const slow = new Promise((resolve) => setTimeout(() => resolve('slow'), 10));

    await expect(myRace([slow, fast])).resolves.toBe('fast');
  });

  it('should reject if first settled promise rejects', async () => {
    const myRace = getMyRace();
    const fastReject = Promise.reject('error');
    const slowResolve = new Promise((resolve) => setTimeout(() => resolve('ok'), 10));

    await expect(myRace([slowResolve, fastReject])).rejects.toBe('error');
  });
});
