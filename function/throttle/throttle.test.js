import './throttle';

describe('throttle method', () => {
  it('should call the function immediately on first call', () => {
    vi.useFakeTimers();

    const spy = vi.fn();
    const throttled = spy.myThrottle(100);

    throttled('A');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('A');

    vi.useRealTimers();
  });

  it('should limit calls within the delay window', () => {
    vi.useFakeTimers();

    const spy = vi.fn();
    const throttled = spy.myThrottle(100);

    throttled();
    throttled();
    throttled();

    expect(spy).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(100);
    throttled();
    expect(spy).toHaveBeenCalledTimes(2);

    vi.useRealTimers();
  });
});
