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
    res_name_error.innerHTML = `한글과 영문만 입력해주세요`;
  } else {
    res_name_error.innerHTML = '';
  }
});

res_call.addEventListener('input', function () {
  let t_value = res_call.value;
  const reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!reg.test(t_value)) {
    res_call_error.innerHTML = `숫자만 입력해주세요`;
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

const PREF_LIST = [
  { value: '', name: '' },
  { value: 1100, name: '서울' },
  { value: 3611, name: '세종' },
  { value: 2600, name: '부산' },
  { value: 2700, name: '대구' },
  { value: 2800, name: '인천' },
  { value: 2900, name: '광주' },
  { value: 3000, name: '대전' },
  { value: 3100, name: '울산' },
  { value: 5011, name: '제주' },
  { value: 5013, name: '서귀포' },
  { value: 4111, name: '수원' },
  { value: 4128, name: '고양' },
  { value: 4113, name: '성남' },
  { value: 4146, name: '용인' },
  { value: 4119, name: '부천' },
  { value: 4127, name: '안산' },
  { value: 4122, name: '평택' },
  { value: 4115, name: '의정부' },
  { value: 4157, name: '김포' },
  { value: 4121, name: '광명' },
  { value: 4145, name: '하남' },
  { value: 4129, name: '과천' },
  { value: 4211, name: '춘천' },
  { value: 4213, name: '원주' },
  { value: 4215, name: '강릉' },
  { value: 4221, name: '속초' },
  { value: 4313, name: '충주' },
  { value: 4420, name: '아산' },
  { value: 4511, name: '전주' },
  { value: 4513, name: '군산' },
  { value: 4519, name: '남원' },
  { value: 4611, name: '목포' },
  { value: 4613, name: '여수' },
  { value: 4615, name: '순천' },
  { value: 4623, name: '광양' },
  { value: 4711, name: '포항' },
  { value: 4713, name: '경주' },
  { value: 4715, name: '김천' },
  { value: 4717, name: '안동' },
  { value: 4719, name: '구미' },
  { value: 4725, name: '상주' },
  { value: 4812, name: '창원' },
  { value: 4817, name: '진주' },
  { value: 4822, name: '통영' },
  { value: 4824, name: '사천' },
  { value: 4825, name: '김해' },
  { value: 4831, name: '거제' },
];
const list = document.querySelector('#group_area');
let optionList = `<option value="">선택하세요</option>`;

PREF_LIST.forEach((item) => {
  optionList += `<option value="${item.value}">${item.name}</option>`;
  list.innerHTML = optionList;
});
