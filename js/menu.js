const trig = document.querySelector('#trigger');
const closer = document.querySelector('#close');

trig.addEventListener('click', openNav);
closer.addEventListener('click', closeNav);

function openNav() {
  document.getElementById("myNav").style.height = "20%";
  // document.getElementById("myNav").style.opacity = "1";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0";
  // document.getElementById("myNav").style.opacity = "0";
}
