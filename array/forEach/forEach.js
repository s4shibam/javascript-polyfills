Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this);
  }
};
