import './reject';

describe('reject method', () => {
  it('should return a rejected promise', async () => {
    await expect(Promise.myReject('error')).rejects.toBe('error');
  });

  it('should reject with Error object', async () => {
    const error = new Error('failed');

    await expect(Promise.myReject(error)).rejects.toBe(error);
  });
});
