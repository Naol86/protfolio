const intro = document.querySelector(".intro");
const nav = document.querySelector(".intro__navbar");

const scrollThreshold = 600;

function checkPoint() {
  if (window.scrollY > scrollThreshold) {
    nav.style.position = "fixed";
    nav.childNodes[3].style.position = "fixed";
  } else {
    nav.style.position = "relative";
    nav.childNodes[3].style.position = "absolute";
  }
}

window.addEventListener("scroll", checkPoint);

const panels = document.querySelectorAll(".info__photo--panel");
let prevActive = null;

panels.forEach((panel) => {
  panel.addEventListener("click", (panel) => {
    if (prevActive && prevActive !== panel.target) {
      prevActive.classList.remove("info__photo--panel-active");
    }
    panel.target.classList.toggle("info__photo--panel-active");
    prevActive = panel.target;
  });
});

function handlePanelClick() {}
