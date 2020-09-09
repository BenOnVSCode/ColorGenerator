//variables,
const generate = document.querySelector('.button');
const body = document.querySelector('#body');
const xColor = document.querySelector('#default');
const colorNumber = document.querySelector("#numberCOlor");
const icons1 = document.querySelector('#i1');
const icons2 = document.querySelector('#i2');
const icons3 = document.querySelector('#i3');

//events,
generate.addEventListener('click', generateColors);
xColor.addEventListener('click', makeItWhite);
generate.addEventListener('click', hoverColor);


//functions,
function generateColors() {
    event.preventDefault();
    var color1 = Math.floor(Math.random() * 255);
    var color2 = Math.floor(Math.random() * 255);
    var color3 = Math.floor(Math.random() * 255);
    var backgroundColor = 'rgb'+ '(' + color1 + ', ' +  color2 + ', ' + color3 + ')' ;
    body.style.backgroundColor = backgroundColor ;
    colorNumber.style.height = '60px' ;
    colorNumber.innerHTML = backgroundColor ;
    if (backgroundColor == '#b8b8b8') {
        icons1.style.color = 'white';
        icons2.style.color = 'white';
        icons3.style.color = 'white';
    }
}
function makeItWhite() {
    body.style.backgroundColor = 'white' ;
    colorNumber.innerHTML = 'rgb(255, 255, 255)'
}

function hoverColor() {
    if (backgroundColor == '#b8b8b8') {
        icons1.style.color = '#3aaabf';
        icons2.style.color = '#3aaabf';
        icons3.style.color = '#3aaabf';
    }
    else {
        icons1.style.color = '#b8b8b8';
        icons2.style.color = '#b8b8b8';
        icons3.style.color = '#b8b8b8';
    }
}
