function lastKNumbersSequence(n, k) {
  let result = [1];

  for (let i = 0; i < n; i++) {
    let currEl = result[i];

    for (let j = i; j < k; j--) {
      if (j >= 0) {
        currEl += result[j];
      } else {
        {
          break;
        }
      }
    }

    result.push(currEl);
  }
  // console.log(n, k);
  console.log(result);
}

lastKNumbersSequence(6, 3);
// [1, 1, 2, 4, 7, 13]

lastKNumbersSequence(8, 2);
// [1, 1, 2, 3, 5, 8, 13, 21]
