const $mobile = document.querySelector('.mobile');
const $gnb = document.querySelector('.gnb');
const $ham = document.querySelector('.ham');
const gnb = `
            <li>
              <a href="#">천문대 소개</a>
              <ul class="sub">
                <li><a href="#">인사말</a></li>
                <li><a href="#">현황 및 조직도</a></li>
                <li><a href="#">시설안내</a></li>
                <li><a href="#">찾아오시는 길</a></li>
              </ul>
            </li>
            <li>
              <a href="#">이용안내</a>
              <ul class="sub">
                <li><a href="#">관람안내</a></li>
                <li><a href="#">특별프로그램</a></li>
                <li><a href="#">아스트로 갤러리</a></li>
              </ul>
            </li>
            <li>
              <a href="#">예약마당</a>
              <ul class="sub">
                <li><a href="#">관람예약</a></li>
                <li><a href="#">전시해설예약</a></li>
                <li><a href="#">특별프로그램 예약</a></li>
                <li><a href="#">봉사활동예약</a></li>
              </ul>
            </li>
            <li>
              <a href="#">참여마당</a>
              <ul class="sub">
                <li><a href="#">질문과 답변</a></li>
                <li><a href="#">방문후기</a></li>
                <li><a href="#">자주하는 질문</a></li>
                <li><a href="#">봉사활동</a></li>
              </ul>
            </li>
            <li>
              <a href="#">알림마당</a>
              <ul class="sub">
                <li><a href="#">공지사항</a></li>
                <li><a href="#">홍보자료</a></li>
                <li><a href="#">천문정보</a></li>
                <li><a href="#">행사사진</a></li>
              </ul>
            </li>
            `;

/* ham 버튼 클릭시 */
$mobile.innerHTML = gnb;
$gnb.innerHTML = gnb;

$ham.addEventListener('click', () => {
  $mobile.classList.toggle('on');
  $ham.classList.toggle('on');
});

/* mobile 서브메뉴 등장 */
const $listMenu = document.querySelectorAll('.mobile > li > a');

// $listMenu.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     $listMenu.forEach((a) => {
//       // a.classList.remove('active');

//       if (!btn.classList.contains('active')) {
//         btn.classList.toggle('active');
//         return;
//       }
//       btn.classList.remove('active');
//     });
//   });
// });

$listMenu.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let eTarget = e.target;
    if (!eTarget.classList.contains('active')) {
      $listMenu.forEach((a) => {
        a.classList.remove('active');
      });
      eTarget.classList.add('active');
    } else {
      eTarget.classList.remove('active');
    }
  });
});

/* 팝업존 스와이퍼 */
var swiper = new Swiper('.popup_zone', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

/* 시설안내 */
const $btns = document.querySelectorAll('.FI_btns button');
const $imgs = document.querySelector('.imgs');

$btns.forEach((item, i) => {
  item.addEventListener('click', () => {
    $imgs.innerHTML = `
      <img src="./images/image${i + 1}.jpg" alt="" />
      <a href="#"></a>`;
    $btns.forEach((a) => {
      a.classList.remove('on');
    });
    $btns[i].classList.add('on');
  });
});

// $btns.forEach((item, i) => {
//   item.addEventListener("cilck", () => {
//     $btns.forEach((a) => {
//       a.classList.remove("on");
//     });
//     $btns[i].classList.add("on");
//   });
// });
