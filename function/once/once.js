Function.prototype.myOnce = function () {
  const fn = this;
  let called = false;
  let response = undefined;

  return function (...args) {
    if (called) {
      return response;
    }

    called = true;
    response = fn.apply(this, args);
    return response;
  };
};
