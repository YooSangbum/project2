// title에 on이 붙으면 예약과정 열림
// popup에 on이 붙으면 모달 열림
const btns = document.querySelectorAll('.complet_btn > input');
const titles = document.querySelectorAll('.title');
const popup = document.querySelector('.popup');

btns.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    console.log(item);
    console.log(titles);
    console.log(i);
    titles.forEach((item) => {
      item.classList.remove('on');
    });
    if (e.target == btns[2]) {
      popup.classList.add('on');
    } else {
      titles[i + 1].classList.add('on');
    }
  });
});
