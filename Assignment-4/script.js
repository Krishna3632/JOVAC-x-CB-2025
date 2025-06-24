const gp = document.querySelector('.gp');
const p = document.querySelector('.p');
const c = document.querySelector('.c');
const result = document.querySelector('.result');


gp.addEventListener('click', (e) => {
    console.log('Capturing Grandparent');
}, true);

p.addEventListener('click', (e) => {
    console.log('Capturing Parent');
}, true);

c.addEventListener('click', (e) => {
    console.log('Capturing Child');
}, true);


gp.addEventListener('click', () => {
    console.log('Bubbling Grandparent');
    gp.style.backgroundColor = '#ffe6e6';
});

p.addEventListener('click', () => {
    console.log('Bubbling Parent');
    p.style.backgroundColor = '#e6ffe6';
});

c.addEventListener('click', () => {
    console.log('Bubbling Child');
    c.style.backgroundColor = '#e6e6ff';
});


gp.addEventListener('click', () => {
    result.textContent = 'Output: grandparent';
});

p.addEventListener('click', (e) => {
    e.stopPropagation();
    result.textContent = 'Output: parent';
});

c.addEventListener('click', (e) => {
    e.stopPropagation();
    result.textContent = 'Output: child';
});