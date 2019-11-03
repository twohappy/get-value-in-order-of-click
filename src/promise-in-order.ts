let promise: Promise<string | {} | void>;
promise = Promise.resolve();
let currentValue = {};

function request(type: string, order: number, callback: (t: string) => void): Promise<string | {} | void> {
    console.log(`${order}th request is about ${type}`);
    return new Promise(function (resolve: Function, reject: Function) {
        const time = Math.floor(Math.random() * 100);
        setTimeout(function () {
            resolve(`${order}'s time is ${time}`);
        }, time)

    }).then(callback);
}

function clickA(order: number) {
    promise = promise.then(() => {
        return request('A', order, (data) => {
            console.log(data)
        })
    })
}

function clickB(order: number) {
    promise = promise.then(() => {
        return request('B', order, (data) => {
            console.log(data)
        })
    })
}


function userClick() {
    const count = 1000;
    for (let i = 0; i < count; i++) {
        if (Math.random() > 0.5) {
            promise = promise.then((data) => {
                return clickA(i);
            })
        } else {
            promise = promise.then((data) => {
                return clickB(i);
            })
        }
        console.log(`the ${i}th request has been sent`)
    }
}

userClick();
