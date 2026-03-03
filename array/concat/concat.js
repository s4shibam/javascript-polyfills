Array.prototype.myConcat = function (...items) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(this[i]);
  }

  for (let i = 0; i < items.length; i++) {
    const value = items[i];

    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        newArray.push(value[j]);
      }
    } else {
      newArray.push(value);
    }
  }

  return newArray;
};
