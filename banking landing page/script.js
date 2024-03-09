
// Modal window

const a = 1;
let number = 12;

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

// testing event delegation through elements via event propagation feature:
// 1. add event listener to a common parent element
document.querySelector(".nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  // 2. determine what element originated the event 
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth"})
  }
});

// adding tabbed component with associative content:
const tabs = document.querySelectorAll(".operations-tab");
const tabsCont = document.querySelector(".operations-cont");
const operations = document.querySelectorAll(".operation");

// proparating the event from parent comp to child c:
document
  .querySelector(".operations-buttons")
  .addEventListener("click", function(e) {
    if (!e.target) return;

    // removing classes from elems
    [...tabs].forEach((t, i) => { t.classList.remove("btn-active") });
    [...operations].forEach((operation, i) => { operation.classList.remove("operation-active") });

    // adding classes to elems:
    e.target.classList.add("btn-active");
    document.querySelector(`.operation-${e.target.dataset.tab}`).classList.add("operation-active");

  });

// ❗this is a bad approach because it means creating a function on each tab elem - in case we have a lot of them it will slower the performance
// [...tabs].forEach((tab, i) => {
//   tab.addEventListener("click", function(e) {
//     alert("tabbed")
//   });
// });

// menu fade animation:
const nav = document.querySelector(".nav");

// the first param here is the even itself, not the opacity value; opacity is stored in the context! 
function handleHover(e) {
  // console.log(this); // this is the number that we pass as an argument 

  if (e.target.classList.contains("link")){
    const currentLink = e.target;
    const siblings = currentLink.parentElement.children;
    const logo = document.querySelector(".nav-logo");

    [...siblings].forEach((sib) => {
      if (sib !== currentLink) sib.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}

// bind method creates a new function; then we pass the opacity value that can be accessible through the this keyword:
nav.addEventListener("mouseover", handleHover.bind(.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// implementing sticky navigation:
const header = document.querySelector(".header");
const initialCoord = header.getBoundingClientRect();

// ❗using the scroll is a bad approach because this e.listener fires upon each slight change in the viewport
// window.addEventListener("scroll", function(e) {
//   // 1. you can go to css > find nav > add position fixed
//   // OR:
//   if (this.window.scrollY > initialCoord.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// a better approach using the Intersection Observer API:
const obsCallback = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// const obsOptions = {
//   root: null, // the viewport 
//   threshold: 0.2 // the change (here it means 10%)
// };

const navHeight = nav.getBoundingClientRect().height;

const observer = new IntersectionObserver(
  obsCallback, 
  { root: null, threshold:  0, rootMargin: `-${navHeight}px`}); // each time the viewport changes to 10% the callback gets invoked
observer.observe(header);

// revealing the sections:

const allSections = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");

  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15, });

allSections.forEach((section) => {
  sectionObserver.observe(section);
  // section.classList.add("section-hidden");
});

// images lazy loading
// 1. when target is 10% visible by the observer: replace the original src to data-src + remove the blur filter 

const allFeatureImages = document.querySelectorAll(".feature-img")

const uploadImg = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;

  // this does not work well with slow internet (the blur effect disappears first and the image is loaded only few seconds afterwards):
  const qualityImg = entry.target.dataset.src;
  entry.target.setAttribute('src', qualityImg);
  // entry.target.classList.remove("lazy");

  // solution is to use the "load" event listener:
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove("lazy");
  });

  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(uploadImg, { root: null, threshold: 0 });

allFeatureImages.forEach((img) => imageObserver.observe(img));

// slider comp
const sliders = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector(".slider-btn-1");
const sliderBtnRight = document.querySelector(".slider-btn-2");

let activeSlideNum = 0;

function changeSlide(slideNum) {
  sliders.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - slideNum)}%)`;
  });
};
changeSlide(0);

function nextSlide() {
  if (activeSlideNum >= sliders.length - 1) activeSlideNum = 0; 
  else  activeSlideNum++;

  changeSlide(activeSlideNum);
  activateDot(activeSlideNum);
};

function prevSlide() {
  if (activeSlideNum === 0) activeSlideNum = sliders.length - 1;
  else activeSlideNum--;
  changeSlide(activeSlideNum);
  activateDot(activeSlideNum);
};


sliderBtnRight.addEventListener("click", nextSlide);
sliderBtnLeft.addEventListener("click", prevSlide);

document.addEventListener('keydown', function(e) {
 if (e.key === 'ArrowRight') nextSlide();
 else if (e.key === 'ArrowLeft') prevSlide();
});

// creating the dots
const dotsCont = document.querySelector(".dots");
function createDots() {
  sliders.forEach((s, i) => {
    dotsCont.insertAdjacentHTML('beforeend', `<button class="dot" data-slide="${i}"></button>`);
  });
}
createDots();

const dots = document.querySelectorAll(".dot");
dotsCont.addEventListener("click", function(e) {
  if (e.target.classList.contains("dot")) {
    dots.forEach((d, i) => d.classList.remove("dot-active"));
    e.target.classList.add("dot-active");

    const slide = e.target.dataset.slide;
    changeSlide(slide)
  }
});

function activateDot(index) {
  dots.forEach((d) => d.classList.remove("dot-active"));
  
  document.querySelector(`.dot[data-slide="${index}"]`).classList.add('dot-active');
};
activateDot(0);

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('conted parsed and loaded');
});