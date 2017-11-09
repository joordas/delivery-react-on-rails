let navBar = document.querySelector(".navbar");

export default function() {
  document.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
      navBar.classList.add("fixed");
    } else if (scroll === 0) {
      navBar.classList.remove("fixed");
    }
  });
}
