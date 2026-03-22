import './debounce';

describe('debounce method', () => {
  it('should call the function once after the delay', () => {
    vi.useFakeTimers();

    const spy = vi.fn();
    const debounced = spy.myDebounce(100);

    debounced();
    debounced();
    debounced();

    vi.advanceTimersByTime(99);
    expect(spy).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(spy).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });

  it('should use the latest arguments', () => {
    vi.useFakeTimers();

    const spy = vi.fn();
    const debounced = spy.myDebounce(100);

    debounced('A');
    debounced('B');

    vi.advanceTimersByTime(100);
    expect(spy).toHaveBeenCalledWith('B');

    vi.useRealTimers();
  });
});
