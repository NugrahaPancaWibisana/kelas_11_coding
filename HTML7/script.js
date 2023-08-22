const click1 = document.getElementById("click1");
const click2 = document.getElementById("click2");
const click3 = document.getElementById("click3");
const click4 = document.getElementById("click4");

click1.addEventListener("click", () => {
  const x1 = document.querySelector("dropdown-content1");
  document.querySelector(".dropdown1").classList.toggle("hover-dd-b");
  document.querySelector(".dropdown2").classList.remove("hover-dd-b");
  document.querySelector(".dropdown3").classList.remove("hover-dd-b");
  document.querySelector(".dropdown4").classList.remove("hover-dd-b");
  document.querySelector(".dropdown-content1").classList.toggle("none");
  document.querySelector(".dropdown-content2").classList.remove("none");
  document.querySelector(".dropdown-content3").classList.remove("none");
  document.querySelector(".dropdown-content4").classList.remove("none");
});

click2.addEventListener("click", () => {
  document.querySelector(".dropdown2").classList.toggle("hover-dd-b");
  document.querySelector(".dropdown1").classList.remove("hover-dd-b");
  document.querySelector(".dropdown3").classList.remove("hover-dd-b");
  document.querySelector(".dropdown4").classList.remove("hover-dd-b");
  document.querySelector(".dropdown-content2").classList.toggle("none");
  document.querySelector(".dropdown-content1").classList.remove("none");
  document.querySelector(".dropdown-content3").classList.remove("none");
  document.querySelector(".dropdown-content4").classList.remove("none");
});

click3.addEventListener("click", () => {
  document.querySelector(".dropdown3").classList.toggle("hover-dd-b");
  document.querySelector(".dropdown2").classList.remove("hover-dd-b");
  document.querySelector(".dropdown1").classList.remove("hover-dd-b");
  document.querySelector(".dropdown4").classList.remove("hover-dd-b");
  document.querySelector(".dropdown-content3").classList.toggle("none");
  document.querySelector(".dropdown-content1").classList.remove("none");
  document.querySelector(".dropdown-content2").classList.remove("none");
  document.querySelector(".dropdown-content4").classList.remove("none");
});

click4.addEventListener("click", () => {
  document.querySelector(".dropdown4").classList.toggle("hover-dd-b");
  document.querySelector(".dropdown2").classList.remove("hover-dd-b");
  document.querySelector(".dropdown3").classList.remove("hover-dd-b");
  document.querySelector(".dropdown1").classList.remove("hover-dd-b");
  document.querySelector(".dropdown-content4").classList.toggle("none");
  document.querySelector(".dropdown-content1").classList.remove("none");
  document.querySelector(".dropdown-content2").classList.remove("none");
  document.querySelector(".dropdown-content3").classList.remove("none");
});