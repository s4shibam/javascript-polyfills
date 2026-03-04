Promise.myReject = function (reason) {
  return new Promise((_, reject) => reject(reason));
};
