const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// Finder elementet med klassen 'design'
const design = document.querySelector(".design");

// Lytter på scroll-eventet på vinduet
window.addEventListener("scroll", () => {
  // Hvor langt vi har scrollet ned fra toppen i pixels
  const scrollTop = window.scrollY;

  // Højden på hele dokumentet minus højden på vinduet (altså den totale scrollbare højde)
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Beregner hvor langt vi er på siden i procent (0 = top, 1 = bund)
  let scrollFraction = scrollTop / docHeight;

  // Opacity falder jo længere ned man kommer:
  // 1 (fuldt synlig) i toppen, til 0.1 (næsten usynlig) i bunden
  let opacity = 1 - scrollFraction * 0.9;

  if (opacity < 0.1) opacity = 0.1; // sikrer minimum opacity

  design.style.opacity = opacity;
});
