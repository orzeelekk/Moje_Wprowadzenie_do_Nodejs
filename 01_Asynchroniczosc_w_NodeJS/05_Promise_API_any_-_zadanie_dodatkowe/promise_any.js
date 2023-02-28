async function promiseAny(arg) {
  const values = await Promise.allSettled(arg);
  const isFulfilled = values.some((x) => {
    console.log(x);
    console.log(x.status)
    return x.status === 'fulfilled';
  });

  return new Promise((resolve, reject) => {
    if (isFulfilled) {
      resolve();
    }
    reject();
  });

}

promiseAny([
  Promise.reject(),
  Promise.reject(),
  Promise.resolve
])
  .then(() => {
    console.log('Something succeeded :) ')
  })
  .catch(() => {
    console.log('All failed :( ') ;
  });
  