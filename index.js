function clickA(order) {
  actualOrder.push(`${order}th click is about A`)
  return new Promise(function (resolve, reject) {
    const time = Math.floor(Math.random() * 3000);
    setTimeout(function () {
      resolve(`${order}'s time is ${time}`);
    }, time);
  })
}

function clickB(order) {
  actualOrder.push(`${order}th click is about B`)
  return new Promise(function (resolve, reject) {
    const time = Math.floor(Math.random() * 3000);
    setTimeout(function () {
      resolve(`${order}'s time is ${time}`);
    }, time);
  })
}

function userClick() {
  const count = 10;
  for (let i = 0; i < count; i++) {
    if (Math.random() > 0.5) {
      clickA(i).then(num => console.log(num));
    } else {
      clickB(i).then(num => console.log(num));
    }
  }
}

let actualOrder = [];
userClick();
actualOrder.forEach(str => console.log(str));
