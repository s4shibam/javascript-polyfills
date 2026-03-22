Function.prototype.myThrottle = function (delay) {
  const fn = this;
  let timeout = null;
  return function (...args) {
    if (!timeout) {
      fn.apply(this, args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
};
