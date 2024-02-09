const btn = document.querySelectorAll("#icon-btn");
const title = document.querySelectorAll(".title-faq");
const items = document.querySelectorAll("#item");

title.forEach((e, index) => {
  e.addEventListener("click", () => {
    items.forEach((e2, itemIndex) => {
      if (index == itemIndex) {
        e2.classList.toggle("hidden");
        e.children[0].setAttribute("src", "./assets/images/icon-minus.svg");
      } else {
        e2.classList.add("hidden");
        // e.children[0].setAttribute("src", "./assets/images/icon-plus.svg");
      }
    });
  });
});
