const getRandomDelay = (maxDelay) => {
  return (Math.floor(Math.random() * maxDelay)) * 1000;
};

const getAsyncNumbers = () => {
  var successDelay = getRandomDelay(10);
  var errorDelay = getRandomDelay(10);

  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve([1, 3, 5, 6, 4, 2]),
      successDelay
    );


    setTimeout(
      () => reject(new Error('No numbers found :(')), 
      errorDelay
    );
  });
};

// Promise.all([
//   getAsyncNumbers(),
//   getAsyncNumbers(),
//   getAsyncNumbers()
// ])
//     .then((results) => {
//       console.log(results[0])
//       console.log(results[1])
//       console.log(results[2])
//     })
//     .catch((err) => {
//       console.log(`Mamy errora - ${err.message}`)
//     })
//
// Promise.all([
//   getAsyncNumbers(),
//   getAsyncNumbers(),
//   getAsyncNumbers(),
// ])
//     .then(([response1, response2, response3]) => {
//       const jointArray = response1.concat(response2, response3);
//       const sortedArray = jointArray.sort();
//       console.log(sortedArray);
//     })
//     .catch((error) => {
//       console.log(`Error occurred: ${error.message}`);
//     });
//
// Promise.allSettled([
//   getAsyncNumbers(),
//   getAsyncNumbers(),
//   getAsyncNumbers()
// ])
//     .then((results) => {
//       console.log(results[0].status + " suchy status")
//       console.log(results[0])
//       console.log(results[1])
//       console.log(results[2])
//     })
//     .catch((err) => {
//       console.log(`Mamy errora - ${err.message}`)
//     })
// Promise.allSettled([
//   getAsyncNumbers(),
//   getAsyncNumbers(),
//   getAsyncNumbers(),
// ])
//     .then((results) => {
//       return results.map((result) => {
//         return result.status;
//       });
//     })
//     .then((statuses) => {
//       console.log(statuses[0]);
//       console.log(statuses[1]);
//       console.log(statuses[2]);
//     })
//     .catch((error) => {
//       console.log(`Error ocurred: ${error.message}`);
//     });
//
Promise.all([
  Promise.resolve(1),
  Promise.resolve(3),
  Promise.resolve(1500100900),
])
    .then((results) => {
      console.log(results[0]);
      console.log(results[1]);
      console.log(results[2]);
    })
    .catch((error) => {
      console.log(`Error ocurred: ${error.message}`); // never shows up
    });

Promise.all([
  Promise.reject(1),
  Promise.reject('error'),
  Promise.reject(new Error('new error')),
])
    .then((results) => {
      console.log(results[0]);
      console.log(results[1]);
      console.log(results[2]);
    })
    .catch((error) => {
      console.log('Error ocurred:', error); // always shows up
    });
