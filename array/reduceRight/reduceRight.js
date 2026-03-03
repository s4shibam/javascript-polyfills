Array.prototype.myReduceRight = function (callbackFn, initialValue) {
  const hasInitialValue = arguments.length >= 2;
  const len = this.length;

  if (len === 0 && !hasInitialValue) {
    throw new TypeError('Reduce of empty array with no initial value');
  }

  let result = hasInitialValue ? initialValue : this[len - 1];
  let startIndex = hasInitialValue ? len - 1 : len - 2;

  for (let i = startIndex; i >= 0; i--) {
    result = callbackFn(result, this[i], i, this);
  }

  return result;
};
