const openBtn = document.querySelector("button");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal__overlay");
const closeBtn = modal.querySelector("button");

const openModal = () => {
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

const btnHover = e => {
  const btn = e.currentTarget;
  btn.classList.toggle("hover");
};

openBtn.addEventListener("click", openModal);
openBtn.addEventListener("mouseenter", btnHover);
openBtn.addEventListener("mouseleave", btnHover);
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("mouseenter", btnHover);
closeBtn.addEventListener("mouseleave", btnHover);
