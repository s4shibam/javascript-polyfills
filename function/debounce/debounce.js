Function.prototype.myDebounce = function (delay) {
  const fn = this;
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(context, args), delay);
  };
};
