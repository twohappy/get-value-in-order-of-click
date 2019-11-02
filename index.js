function click1() {
  return new Promise(function (resolve, reject) {
    const time = Math.floor(Math.random() * 3000);
    setTimeout(function () {
      resolve(`1's time is ${time}`);
    }, time);
  })
}

function click2() {
  return new Promise(function (resolve, reject) {
    const time = Math.floor(Math.random() * 3000);
    setTimeout(function () {
      resolve(`2's time is ${time}`);
    }, time);
  })
}

function userClick() {
  const count = 10;
  for (let i = 0; i < count; i++) {
    if (Math.random() > 0.5) {
      click1().then(num => console.log(num));
      console.log('click--->  1');
    } else {
      click2().then(num => console.log(num));
      console.log('click--->  2');
    }
  }
}

userClick();
