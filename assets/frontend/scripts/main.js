document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glides", {
      type: "carousel",
      startAt: 1,
      animationTimingFunc: "ease-in-out",
      perView: 3
    }).mount();
})

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});