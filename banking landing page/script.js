
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
});

const btnScroll = document.querySelector(".btn-scroll");
const section1 = document.querySelectorAll(".section")[0];

btnScroll.addEventListener("click", (e) => {
  const section1_coords = section1.getBoundingClientRect();

  // old school way with calculating the coordinates of the elements:
  window.scrollTo({
    left: section1_coords.left,
    top: section1_coords.top - 55 + window.pageYOffset,
    behavior: "smooth",
  });

  // modern way:
  // section1.scrollIntoView({
  //   behavior: "smooth",
  // });

});