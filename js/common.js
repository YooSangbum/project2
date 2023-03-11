/* 반응형 ham버튼 */
const $gnb = document.querySelector(".gnb");
const $ham = document.querySelector(".ham");

$ham.addEventListener("click", () => {
  $gnb.classList.toggle("active");
  $ham.classList.toggle("on");
});

/* 반응형 submenu 나오기 */
const menuList = document.querySelectorAll(".gnb.active > li > a");
console.log(menuList);

menuList.forEach((mainmenu) => {
  mainmenu.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(e.target);

    let eTarget = e.target;

    if (eTarget.classList.contains("on") == false) {
      menuList.forEach((item) => {
        item.classList.remove("on");
      });
      eTarget.classList.add("on");
    } else {
      eTarget.classList.remove("on");
    }
  });
});
