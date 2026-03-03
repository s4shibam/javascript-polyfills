Array.prototype.myReverse = function () {
  const n = this.length;

  for (let i = 0; i < n / 2; i++) {
    let temp = this[i];

    this[i] = this[n - i - 1];
    this[n - i - 1] = temp;
  }

  return this;
};
