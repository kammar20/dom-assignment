const accordion = document.querySelector('.accordion-homepage');

const newSection = document.createElement('section');

newSection.setAttribute('class', 'parent');

const h3 = document.createElement('h3');

h3.innerText = 'My New FAQ';

newSection.append(h3);

accordion.append(newSection);
