export function request(type: string, order: number) {
    console.log(`${order}th request is about ${type}`);
    return new Promise(function (resolve: (T: string) => void, reject: (E: Error) => void) {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(function () {
            resolve(`${order} ---> ${type}'s time is ${time}`);
        }, time)
    });
}
