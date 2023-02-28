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

    // setTimeout(
    //   () => reject(new Error('No numbers found :(')),
    //   errorDelay
    // );

  });
};

// getAsyncNumbers()
//     .then(
//         (numery) => {
//           const sorted = numery.sort();
//           console.log(sorted);
//         })
//     .catch(
//         (err) => {
//           console.log("Mamy errora" + err.message);
//         })
//     .finally(
//         () => {
//           console.log("Proces zakonczony")
//         });

async function mojaAsyncFunkcja() {
  try {
    const numery = await getAsyncNumbers();
    const posortowane = numery.sort();
    console.log(posortowane);
  } catch(err) {
    console.log(`Mamy errora ${err.message}`);
  } finally {
    console.log("GOOOOOtoooowe")
  }
}
mojaAsyncFunkcja();
//ok