const icon = document.querySelectorAll("#icon-btn");
const title = document.querySelectorAll(".title-faq");
const items = document.querySelectorAll("#item");
const otaEl = document.querySelectorAll("#ota-el");

Array.from(title).forEach((e, index) => {
  e.addEventListener("click", () => {
    // img change
    e.parentElement.children[1].classList.toggle("hidden");

    otaEl.forEach((el, il) => {
      if (index != il) {
        el.children[1].classList.add("hidden");
      }

      // P element hidden bo'lganda, img dagi elementham hidden
      if (!Array.from(el.children[1].classList).includes("hidden")) {
        el.children[0].children[0].setAttribute(
          "src",
          "./assets/images/icon-minus.svg"
        );
      } else {
        el.children[0].children[0].setAttribute(
          "src",
          "./assets/images/icon-plus.svg"
        );
      }
    });
  });
});
