function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

//normal
// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

//Promise Chaining
fetchData()
  .then((data) => {
    console.log(data);
    return `arun`;
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));
