const $mobile = document.querySelector(".mobile");
const $gnb = document.querySelector(".gnb");
const $ham = document.querySelector(".ham");
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
              <a href="./sub_page.html">예약마당</a>
              <ul class="sub">
                <li><a href="./sub_page.html">관람예약</a></li>
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

$ham.addEventListener("click", () => {
  $mobile.classList.toggle("on");
  $ham.classList.toggle("on");
});

/* mobile 서브메뉴 등장 */
const $listMenu = document.querySelectorAll(".mobile > li > a");

$listMenu.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let eTarget = e.target;
    if (!eTarget.classList.contains("active")) {
      $listMenu.forEach((a) => {
        a.classList.remove("active");
      });
      eTarget.classList.add("active");
    } else {
      eTarget.classList.remove("active");
    }
  });
});

/* 팝업존 스와이퍼 */
var swiper = new Swiper(".popup_zone", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});

/* 시설안내 */
const $btns = document.querySelectorAll(".FI_btns button");
const $imgs = document.querySelector(".imgs");

$btns.forEach((item, i) => {
  item.addEventListener("click", () => {
    $imgs.innerHTML = `
      <img src="./images/image${i + 1}.jpg" alt="" />
      <a href="#"></a>`;
    $btns.forEach((a) => {
      a.classList.remove("on");
    });
    $btns[i].classList.add("on");
  });
});

/* 날씨정보 */

// |이 코드는 API를 통해 날씨 정보를 가져와서 해당 정보를 화면에 출력하는 기능을 수행합니다.
// |
// |좋은 점:
// |- fetch API를 사용하여 비동기적으로 데이터를 가져오고 있습니다.
// |- Promise를 사용하여 데이터를 가져오고 나서 화면에 출력하는 displayItems 함수를 호출하고 있습니다.
// |- 날씨 정보를 받아와서 해당하는 이미지를 출력하는 부분이 깔끔하게 구현되어 있습니다.
// |
// |나쁜 점:
// |- API 주소가 하드코딩되어 있어서, 만약 API 주소가 변경되면 코드를 수정해야 합니다.
// |- 날짜 정보를 가져오는 부분에서 월(month)을 가져올 때 +1을 해주는데, 이 부분이 왜 필요한지 주석으로 설명이 없어서 코드를 이해하는 데 어려움이 있을 수 있습니다.
// |- 날씨 정보를 출력하는 부분에서, 날씨 상태(weatherReady)에 따라서 이미지를 출력하는 부분이 길고 복잡합니다. 이 부분을 함수로 분리하거나, 객체를 사용하여 간단하게 구현할 수 있을 것입니다.

/* 선생님 피드백 및 ai */

// const loadItems = () => {
//   return fetch(
//     'https://www.7timer.info/bin/api.pl?lon=127.378&lat=36.349&product=civillight&output=json'
//   )
//     .then((data) => data.json())
//     .then((json) => json.dataseries);
// };

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const day = today.getDate();

// const displayItems = (items) => {
//   const con = document.querySelector('.weather_wrap');
//   const info = items[0];
//   const weatherReady = info.weather;
//   let iconImg = '';

/************************************************************ */

// switch (weatherReady) {
//   case 'clear':
//     iconImg = 'clear';
//     break;
//   case 'pcloudy':
//   case 'cloudy':
//   case 'very cloudy':
//     iconImg = 'cloudy';
//     break;
//   case 'light rain or showers':
//   case 'occasional showers':
//   case 'isolated showers':
//   case 'rain':
//     iconImg = 'rain';
//     break;
//   case 'light or occasional snow':
//   case 'snow':
//   case 'mixed':
//     iconImg = 'snow';
//     break;
//   case 'thunderstorm possible':
//     iconImg = 'thunderstorm possible';
//     break;
//   case 'thunderstorm':
//     iconImg = 'thunderstorm';
//     break;
//   case 'foggy':
//   case 'windy':
//     iconImg = 'foggy';
//     break;
// }

/************************************************************ */

// const weatherIcons = {
//   clear: "clear",
//   pcloudy: "cloudy",
//   cloudy: "cloudy",
//   "very cloudy": "cloudy",
//   "light rain or showers": "rain",
//   "occasional showers": "rain",
//   "isolated showers": "rain",
//   rain: "rain",
//   "light or occasional snow": "snow",
//   snow: "snow",
//   mixed: "snow",
//   "thunderstorm possible": "thunderstorm possible",
//   thunderstorm: "thunderstorm",
//   foggy: "foggy",
//   windy: "foggy",
// };

// iconImg = weatherIcons[weatherReady];

/************************************************************ */

//   con.innerHTML = `
//     <div class="img_wrap">
//       <p>${year}년 ${month}월 ${day}일</p>
//       <img src="./images/${iconImg}.png" alt=" ${iconImg}" />
//     </div>
//     <div class="p_wrap">
//       <p>최저온도: ${info.temp2m.min}</p>
//       <p>최고온도: ${info.temp2m.max}</p>
//     </div>
//       `;
// };

// loadItems().then(displayItems).catch(console.log);

function loadItems() {
  return fetch(
    "https://www.7timer.info/bin/api.pl?lon=127.378&lat=36.349&product=civillight&output=json"
  ) //
    .then((data) => data.json())
    .then((json) => json.dataseries);
}

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

function displayItems(items) {
  const con = document.querySelector(".weather_wrap");
  const info = items[0];
  let weatherReady = info.weather;
  let iconImg = "";

  if (weatherReady == "clear") {
    iconImg = "clear";
  } else if (
    weatherReady == "pcloudy" ||
    weatherReady == "cloudy" ||
    weatherReady == "very cloudy"
  ) {
    iconImg = "cloudy";
  } else if (
    weatherReady == "light rain or showers" ||
    weatherReady == "occasional showers" ||
    weatherReady == "isolated showers" ||
    weatherReady == "rain"
  ) {
    iconImg = "rain";
  } else if (
    weatherReady == "light or occasional snow" ||
    weatherReady == "snow" ||
    weatherReady == "mixed"
  ) {
    iconImg = "snow";
  } else if (weatherReady == "thunderstorm possible") {
    iconImg = "thunderstorm possible";
  } else if (weatherReady == "thunderstorm") {
    iconImg = "thunderstorm";
  } else if (weatherReady == "foggy" || weatherReady == "widny") {
    iconImg = "foggy";
  }

  con.innerHTML = `
    <div class="img_wrap">
      <p>${year}년 ${month}월 ${day}일</p>
      <img src="./images/${iconImg}.png" alt=" ${iconImg}" />
    </div>
    <div class="p_wrap">
      <p>최저온도: ${info.temp2m.min}</p>
      <p>최고온도: ${info.temp2m.max}</p>
    </div>
      `;
}

loadItems() //
  .then((items) => {
    displayItems(items);
  })
  .catch(console.log);

/* 메인문구 타이핑 효과 */
const content = `도,심, 속,에,서, 만,나,는, <em>별</em>,과, <em>낭만</em>,의, 하,늘, 놀,이,터,<br />,
  ,<strong>대전시민천문대</strong>`;
const text = document.querySelector("h2 > span");

const letter = content.split(",");
// console.log(letter);
let i = 0;

function typing() {
  if (i < letter.length) {
    let txt = letter[i];
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 300);
