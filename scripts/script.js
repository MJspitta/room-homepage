const modal = document.querySelector('dialog');
const hamburgerIcon = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-menu');

hamburgerIcon.addEventListener('click', () => {
  modal.showModal();
  modal.classList.add('show');
  modal.classList.remove('hide');
});

closeIcon.addEventListener('click', () => {
  modal.close();
  modal.classList.add('hide');
  modal.classList.remove('show');
});

const data = [
  {
    "topic": "Discover innovative ways to decorate",
    "paragraph": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    "topic": "We are available all across the globe",
    "paragraph": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    "topic": "Manufactured with the best materials",
    "paragraph": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
];

const isMobileScreen = () => window.innerWidth < 400;

const topic = document.getElementById('topic');
const paragraph = document.getElementById('paragraph');
const heroImage = document.querySelector('.hero-image-section');
let currIndex = 0;

const setFields = () => {
  const isMobile = isMobileScreen();
  const slide = data[currIndex];

  topic.textContent = slide.topic;
  paragraph.textContent = slide.paragraph;
  heroImage.style.backgroundImage = `url('../images/${isMobile ? "mobile" : "desktop"}-image-hero-${currIndex + 1}.jpg')`;
};

setFields();

window.addEventListener('resize', setFields);

const leftSlide = document.getElementById('left-slide');
const rightSlide = document.getElementById('right-slide');

leftSlide.addEventListener('click', () => {
  currIndex = currIndex === 0 ? 0 : currIndex - 1;
  setFields();
});

rightSlide.addEventListener('click', () => {
  currIndex = currIndex === 2 ? 2 : currIndex + 1;
  setFields();
});