Array.prototype.myKeys = function () {
  const keys = [];
  for (let i = 0; i < this.length; i++) {
    keys.push(i);
  }

  function* iterator() {
    yield* keys;
  }

  return iterator();
};
