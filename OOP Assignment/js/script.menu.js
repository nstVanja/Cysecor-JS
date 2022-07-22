// Selektovanje pozicije na ekranu
let menu = document.querySelector('#top');
menu.scrollLeft = localStorage.getItem("top-scroll-position");
menu.onscroll = function() {
  localStorage.setItem("top-scroll-position", top.scrollLeft);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    let id = this.getAttribute("href").substr(1);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView({
        behavior: "smooth"
      });
    } else {
      document.querySelector(`[id='${decodeURIComponent(id)}']`).scrollIntoView();
    }
  });
});
