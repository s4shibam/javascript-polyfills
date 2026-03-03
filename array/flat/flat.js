Array.prototype.myFlat = function (depth = 1) {
  const result = [];

  flatten(this, depth, result);

  return result;
};

function flatten(arr, depth, result) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      flatten(arr[i], depth - 1, result);
    } else {
      result.push(arr[i]);
    }
  }
}
