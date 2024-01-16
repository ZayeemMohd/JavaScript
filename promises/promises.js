function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let speed = Math.floor(Math.random() * 10) + 1;

    if (speed > 4) {
      resolve("data was saved");
    } else {
      reject("weak connection! data wasn't saved");
    }
  });
}

saveToDB("hello world")
  .then(() => {
    console.log("data1 saved");
    return saveToDB("hello india");
  })
  .then(() => {
    console.log("data2 saved");
    return saveToDB("hello telangana");
  })
  .then(() => {
    console.log("data3 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
