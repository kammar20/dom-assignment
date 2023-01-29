const head = document.querySelector('.create_account-content li h2');

const newElm = document.createElement('h3');

newElm.innerText = 'JSBOOTCAMP';
head.before(newElm);
newElm.style.textAlign = 'center';

document.querySelector('.create_account-content li h2 strong').style.display =
  'none';
