'use strict';

const box = wrapper.getElementById('box'), // получает один элемент уникальный
      btns = wrapper.getElementsByTagName('button'),
      circles = wrapper.getElementsByClassName('circle'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart'), // получает первый элемент который попался селектору
      wrapper = wrapper.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
    // hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEeach(item => {
    item.style.backgroundColor = 'blue';
}); 

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.querySelector('wrapper').append(div);

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]);


// div.innerHTML = "<h1>Hello World</h1>";

div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');










// hearts.forEach(item =>{
//     console.log(item);
// });