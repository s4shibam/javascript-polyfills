Array.prototype.myMap = function (callbackFn) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const value = callbackFn(this[i], i, this);

    result.push(value);
  }

  return result;
};
