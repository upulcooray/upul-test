particlesJS("particles-js", {
  particles: {
    number: { value: 75, density: { enable: true, value_area: 800 } },
    color: { value: "#61CFE5" },
    shape: {
      type: "star",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/logo_brain.png", width: 100, height: 100 }
    },
    opacity: {
      value: 0.2,
      random: true,
      anim: { enable: false, speed: 0.8, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 20,
      random: true,
      anim: { enable: false, speed: 20, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#2aa198",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 2.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
