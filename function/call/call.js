Function.prototype.myCall = function (thisArg = {}, ...argArray) {
  thisArg.fn = this;
  return thisArg.fn(...argArray);
};
