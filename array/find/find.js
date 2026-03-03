Array.prototype.myFind = function (predicate) {
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};
