let btns = document.querySelectorAll('.num li');
let Card2 = document.querySelector('.header-2');
let Card = document.querySelector('.header');
let span = document.querySelector('span');

Array.from(btns).forEach(btn => {
  btn.addEventListener('click', e => {
    const rating = e.target.textContent;
    span.textContent = rating;
    Card2.classList.remove('hide');
    Card.classList.add('hide');
  });
});
