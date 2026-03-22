Function.prototype.myBind = function (thisArg = {}, ...argArray) {
  thisArg.fn = this;
  return function (...args) {
    return thisArg.fn(...argArray, ...args);
  };
};
