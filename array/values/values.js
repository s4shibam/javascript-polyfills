Array.prototype.myValues = function () {
  const values = [];

  for (let i = 0; i < this.length; i++) {
    values.push(this[i]);
  }

  function* iterator() {
    yield* values;
  }

  return iterator();
};
