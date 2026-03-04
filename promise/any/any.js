Promise.myAny = function (promises = []) {
  const errors = [];
  let rejectedPromiseCount = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          errors[i] = err;
          rejectedPromiseCount++;

          if (rejectedPromiseCount === promises.length) {
            reject(
              new AggregateError(
                errors,
                'AggregateError: All promises were rejected'
              )
            );
          }
        });
    });
  });
};
