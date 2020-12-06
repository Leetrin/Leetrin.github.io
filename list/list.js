const input = document.querySelector('.input');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const ol = document.querySelector('ol');

const array = [];

let selectedElement = null;

plus.addEventListener('click', onPlusClick);
minus.addEventListener('click', onMinusClick);
ol.addEventListener('click', onLiClick);


function onPlusClick() {
    if (input.value !== '') {
        array.push(input.value);
        input.value = '';
        updateList();
    }
}

function onMinusClick() {
    if (selectedElement !== null) {
        array.splice(selectedElement, 1);
        selectedElement = null;
        updateList();
    }
}


function onLiClick(event) {
    selectedElement = +event.target.attributes[0].value;
    const allLi = document.querySelectorAll('li');
    allLi.forEach(function (elem) {
        elem.classList.remove('selected');
    })
    event.target.classList.add('selected');
}


function updateList() {
    ol.innerHTML = '';
    array.forEach(function (elem, index) {
        const newLi = document.createElement('li');
        newLi.innerText = elem;
        newLi.setAttribute('index', index);
        ol.append(newLi);
    })
}