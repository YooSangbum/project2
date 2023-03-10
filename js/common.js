const $gnb = document.querySelector('.gnb');
const $ham = document.querySelector('.ham');

$ham.addEventListener('click', () => {
  $gnb.classList.toggle('active');
  $ham.classList.toggle('on');
});
