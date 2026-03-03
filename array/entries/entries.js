Array.prototype.myEntries = function () {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push([i, this[i]]);
  }

  function* iterator() {
    yield* newArray;
  }

  return iterator();
};
