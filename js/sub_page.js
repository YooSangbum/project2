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

titles.forEach((item) => {
  item.addEventListener('click', (e) => {
    let eTarget = e.target;
    if (!eTarget.classList.contains('on')) {
      titles.forEach((a) => {
        a.classList.remove('on');
      });
      eTarget.classList.add('on');
    } else {
      eTarget.classList.remove('on');
    }
  });
});

// 관람예약, 특별프로그램예약, 전시해설예약, 봉사활동예약 on 붙으면

const tap_btns = document.querySelectorAll('.btns button');
const form = document.querySelectorAll('.form');

tap_btns.forEach((item, i) => {
  item.addEventListener('click', () => {
    tap_btns.forEach((a) => {
      a.classList.remove('on');
    });
    item.classList.add('on');
    form.forEach((item) => {
      item.classList.remove('on');
    });
    form[i].classList.add('on');
  });
});

// 개인 | 단체 선택
const select_btn = document.querySelectorAll('.select > input');
const proc = document.querySelectorAll('.proc');

select_btn.forEach((item, i) => {
  item.addEventListener('click', (e) => {
    let eTarget = e.target;
    select_btn.forEach((a) => {
      a.classList.remove('on');
    });
    eTarget.classList.add('on');
    if (eTarget.classList.contains('on')) {
      proc.forEach((item) => {
        item.classList.remove('on');
      });
      proc[i].classList.add('on');
    }
  });
});

// 정규식 넣기
const res_name = document.querySelector('#res_name');
const res_call = document.querySelector('#res_call');
const res_email = document.querySelector('#res_email');

let res_name_error = document.querySelector('.res_name_error');
let res_call_error = document.querySelector('.res_call_error');
let res_email_error = document.querySelector('.res_email_error');

res_name.addEventListener('input', function () {
  let t_value = res_name.value;
  const reg = /^[a-zA-Z-가-힣]*$/;
  if (!reg.test(t_value)) {
    res_name_error.innerHTML = `한글과 영문만 사용해주세요`;
  } else {
    res_name_error.innerHTML = '';
  }
});

res_call.addEventListener('input', function () {
  let t_value = res_call.value;
  const reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!reg.test(t_value)) {
    res_call_error.innerHTML = `숫자만 사용해주세요`;
  } else {
    res_call_error.innerHTML = '';
  }
});

res_email.addEventListener('change', function () {
  let t_value = res_email.value;
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
  if (!reg.test(t_value)) {
    res_email_error.innerHTML = `형식에 맞는 이메일을 입력해주세요`;
  } else {
    res_email_error.innerHTML = '';
  }
});
