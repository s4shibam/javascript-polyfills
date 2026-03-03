Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = arguments.length >= 2;

  if (this.length === 0 && !hasInitialValue) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let result = hasInitialValue ? initialValue : this[0];
  let startIndex = hasInitialValue ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    result = callbackFn(result, this[i], i, this);
  }

  return result;
};
