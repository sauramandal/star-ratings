const allStars = document.querySelectorAll(".fa-star");

init();

function init() {
  allStars.forEach((star) => {
    star.addEventListener("click", saveRating);
    star.addEventListener("mouseover", addCSS);
    star.addEventListener("mouseleave", removeCSS);
  });
}

function saveRating(e) {
  removeEventListenersToAllStars();
  alert("Rated " + e.target.dataset.star + " stars");
}

function addCSS(e, css = "checked") {
  const overedStar = e.target;
  let prevSibling = overedStar.previousElementSibling;
  while (prevSibling) {
    prevSibling.classList.add(css);
    prevSibling = prevSibling.previousElementSibling;
  }
  overedStar.classList.add(css);
}

function removeCSS(e, css = "checked") {
  const overedStar = e.target;
  let prevSibling = overedStar.previousElementSibling;
  while (prevSibling) {
    prevSibling.classList.remove(css);
    prevSibling = prevSibling.previousElementSibling;
  }
  overedStar.classList.remove(css);
}

function removeEventListenersToAllStars() {
  allStars.forEach((star) => {
    star.removeEventListener("click", saveRating);
    star.removeEventListener("mouseover", addCSS);
    star.removeEventListener("mouseleave", removeCSS);
  });
}
