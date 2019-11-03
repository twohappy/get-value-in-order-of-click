import {request} from "./promise-in-order";

let div = document.createElement('div');
let buttonA = document.createElement('button');
let buttonB = document.createElement('button');
let desc = document.createElement('p');
let order = 0;
buttonA.style.width = '160px'
buttonA.style.height = '60px'
buttonA.innerText = 'Btn A'
buttonA.addEventListener('click', function () {
    request('A', order).then(data => {
        console.log(data);
        desc.innerText = data;
    });
    order++;
});

buttonB.style.width = '160px'
buttonB.style.height = '60px'
buttonB.innerText = 'Btn B'
buttonB.addEventListener('click', function () {
    request('B', order).then(data => {
        console.log(data);
        desc.innerText = data;
    });
    order++;
});

desc.style.height = '200px'
desc.style.width = '200px'
desc.style.backgroundColor = '#aabbcc55'

div.appendChild(buttonA)
div.appendChild(buttonB)
div.appendChild(desc)
div.style.width = '200px';

let body = document.querySelector('body');
body.appendChild(div);

