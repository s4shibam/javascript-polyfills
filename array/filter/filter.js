Array.prototype.myFilter = function (predicate) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (predicate(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};
