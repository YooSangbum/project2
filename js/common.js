const $mobile = document.querySelector(".mobile");
const $ham = document.querySelector(".ham");

$ham.addEventListener("click", () => {
  $mobile.classList.toggle("on");
  $ham.classList.toggle("on");
});

const $listMenu = document.querySelectorAll(".mobile p");

$listMenu.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    this.classList.toggle("active");

    button.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.classList.remove("active");
      }
    });
  });
});
