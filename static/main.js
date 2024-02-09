window.onload = () => {
  document.querySelector(".hero").style.opacity = "1";
  document.querySelector(".hero").style.transform = `translateY(0px)`;
};

const nav = document.querySelector(".navbar");
const nav_ul = document.querySelector(".navbar ul");

var flag = 0;

document.querySelector(".hamburger").addEventListener("click", (event) => {
  event.preventDefault();
  if (flag) {
    nav.style.flexDirection = "row";
    nav.style.padding = "25px 20px";
    nav.style.margin = "0px 40px";
    nav.style.backgroundColor = "white";
    document.querySelector(".navbar-brand").style.color = "black";
    nav.style.gap = "0px";
    nav_ul.style.display = "none";
    nav.style.textAlign = "center";

    const links = document.querySelectorAll(".navbar li a");
    links.forEach((child) => {
      child.style.color = "white";
    });
    document.querySelector(".hamburger").style.fill = "black";
  } else {
    nav.style.flexDirection = "column";
    nav.style.padding = "12px";
    nav.style.margin = "0";
    nav.style.backgroundColor = "black";
    document.querySelector(".navbar-brand").style.color = "white";
    nav.style.gap = "20px";
    nav_ul.style.display = "flex";
    nav.style.textAlign = "center";

    const links = document.querySelectorAll(".navbar li a");
    links.forEach((child) => {
      child.style.color = "white";
    });
    document.querySelector(".hamburger").style.fill = "white";
  }
  flag = flag ^ 1;
});

const observer0 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".about-me").style.opacity = "1";
      document.querySelector(".about-me").style.transform = `translateY(0px)`;
    }
  }, 2);
});

const observer1 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".contact-me").style.opacity = "1";
      document.querySelector(".contact-me").style.transform = `translateY(0px)`;
    }
  }, 1);
});

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".my-works").style.opacity = "1";
      document.querySelector(".my-works").style.transform = `translateY(0px)`;
    }
  }, 1);
});

observer0.observe(document.querySelector(".about-me"));
observer1.observe(document.querySelector(".contact-me"));
observer2.observe(document.querySelector(".my-works"));

document.querySelector(".contact").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "#contact";
});

document.querySelector(".project-btn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "#works";
});

const in_svgs = document.querySelectorAll(".instagram-svg");

in_svgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    window.open(
      "https://www.instagram.com/vxd4nt/?igsh=MWphd3MybWUwaHpnNg%3D%3D&utm_source=qr"
    );
  });
});

const em_svgs = document.querySelectorAll(".email-svg");

em_svgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    window.location.href = "mailto://vedshiv68@gmail.com";
  });
});

const di_svgs = document.querySelectorAll(".discord-svg");

di_svgs.forEach((svg) => {
  svg.addEventListener("click", () => {
    window.open("https://discordapp.com/users/670249555043811340");
  });
});
