Array.prototype.mySort = function (compareFn = defaultCompareFn) {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (compareFn(this[i], this[j]) > 0) {
        const temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }

  return this;
};

function defaultCompareFn(a, b) {
  a = a.toString();
  b = b.toString();

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}
