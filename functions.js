function getData(completed) {
    return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (completed) {
      resolve('This is the data.');
    } else {
        reject('There was an error.');
        }
  }, 6000);
});
}

let data = getData(false);
data.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});