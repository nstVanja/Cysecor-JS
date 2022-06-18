/**
 * Responsive meni
 */
let menu = document.querySelector('.header ul');
let btn = document.querySelector('.header button');

const mobileMenu = () => {
//  let menu = document.querySelector('.header ul');
//  let btn = document.querySelector('.header button');

  if(btn.innerText === 'MENU') {
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
  } else {
    menu.style.display = 'none';
    btn.innerText = 'MENU';
  };

  // Listen for window resize event
  window.addEventListener('resize', function(event){
      let newWidth = window.innerWidth;
      console.log(newWidth);
      if (newWidth >= 1000) {
        menu.style.display = 'flex';
        btn.style.display = 'none';
      } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
      }
  });
};

/**
 * Galerija
 */
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

console.log(pictures);

// Pomeramo slike u desno
const moveRight = () => {
  displayNone();
  imgNum++;

  if (imgNum === pictures.length) {
    imgNum = 0;
  };

  pictures[imgNum].style.display = 'block';
};

// Pomeramo slike u levo
const moveLeft = () => {
  displayNone();
  imgNum--;

  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }

  console.log(imgNum);

  pictures[imgNum].style.display = 'block';
};

// Event listeneri za strelice levo, desno
rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);

/**
 * Funkcija koja sakriva sve slike
 */
const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = 'none';
  });
};

/**
 * Portfolio
 */
const portfolioSort = (button) => {
  let category = button.getAttribute('data-category');
  let portfolioItems = document.querySelectorAll('.portfolio-single-item');

  console.log(category);

  portfolioItems.forEach((item) => {
    item.style.display = 'none';
  });

  if (category === 'sve') {
    portfolioItems.forEach((item) => {
      item.style.display = 'block';
    });
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute('data-category').includes(category)) {
      item.style.display = 'block';
    }
  });
};

/**
 * Otvaranje modala
 */
const openModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');

  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
};

/**
 * Zatvaranje modala
 */
const closeModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');

  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
};
