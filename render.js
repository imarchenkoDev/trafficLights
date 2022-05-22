
function renderRed(){    
    let createRed = document.createElement('div');
    createRed.id = "1";
    createRed.style.cssText = 'height: 100px; width: 100px; background-color: red; border-radius: 50%';
document.body.append(createRed);
}

function renderYellow(){    
    let createYellow = document.createElement('div');
    createYellow.id = "2";
    createYellow.style.cssText = 'height: 100px; width: 100px; background-color: yellow; border-radius: 50%';
document.body.append(createYellow);
}
function renderGreen(){    
    let createGreen = document.createElement('div');
    createGreen.id = "3";
    createGreen.style.cssText = 'height: 100px; width: 100px; background-color: green; border-radius: 50%';
document.body.append(createGreen);
}
renderRed();
renderYellow();
renderGreen();

let red = document.getElementById('1');
let yellow = document.getElementById('2');
let green = document.getElementById('3');
function changeColor() {
    setInterval(() => {
        red.style.backgroundColor = 'grey';
        yellow.style.backgroundColor = 'grey';
        green.style.backgroundColor = 'grey';
    }, 2000);
    setInterval(() => {
        red.style.backgroundColor = 'red';
        yellow.style.backgroundColor = 'grey';
        green.style.backgroundColor = 'grey';
    }, 4000);
    setInterval(() => {
        red.style.backgroundColor = 'grey';
        yellow.style.backgroundColor = 'yellow';
        green.style.backgroundColor = 'grey';
    }, 6000);
    setInterval(() => {
        red.style.backgroundColor = 'grey';
        yellow.style.backgroundColor = 'grey';
        green.style.backgroundColor = 'green';
    }, 8000);
}
function changeColor();



