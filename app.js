const add = document.querySelector('button');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');
const input = document.querySelector('input');

eventListeners();

function eventListeners() {
    form.addEventListener('submit', adding);
    ul.addEventListener('click', remove);
}

function adding (e) {
    if (input.value !== '') {
        const li = ul.appendChild(document.createElement('li'));
        const p = li.appendChild(document.createElement('p'));
        p.id = 'paragraph';
        const done = p.appendChild(document.createElement('img'));
        done.className = 'done';
        done.src = './img/icons8-done-75.png';
        const trash = li.appendChild(document.createElement('img'));
        trash.className = 'trash';
        trash.src = './img/icons8-trash-75.png';
        p.appendChild(document.createTextNode(input.value));
        input.value = '';
    }

    e.preventDefault();
}

function remove (e) {
    if (e.target.className === 'trash') {
        e.target.parentElement.remove();
    }

    if (e.target.id === 'paragraph' ) {
        e.target.classList.toggle('hide');
    }
}