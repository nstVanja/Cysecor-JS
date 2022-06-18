/**
 * Responsive meni
 */
let menu = document.querySelector('.header ul');
let btn = document.querySelector('#mobileMenu');

const mobileMenu = () => {

  if(btn.innerText === 'MENU') {
    menu.style.display = 'block';
    btn.innerText = 'CLOSE';
  } else {
    menu.style.display = 'none';
    btn.innerText = 'MENU';
    //btn.innerHTML = `&#9776;`;

  };
};

/* Funkcija za window listener za large screen */
const largeScr = () => {
  menu.style.display = 'flex';
  btn.style.display = 'none';
};

/* Funkcija za window listener za small screen */
const smallScr = () => {
  btn.style.display = 'block';
  if (btn.innerText == 'CLOSE') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
};

// Event listener za window resize event
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      smallScr();
    } else {
      largeScr()
    }
});

// Event listener za klik na MENU i CLOSE
btn.addEventListener('click', mobileMenu);

/**
 * Galerija
 */
let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

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

// Event listener za sortiranje kategorija
let button = document.querySelectorAll('button.categories').forEach(item => {
  item.addEventListener('click', event => {
    console.log(item.attributes[0].nodeValue);
    portfolioSort(item);
  })
});

// Funkcija koja sortira kategorije
const portfolioSort = (button) => {

  let category = button.getAttribute('data-category');
  let portfolioItems = document.querySelectorAll('.portfolio-single-item');

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
let txtPrvi = `Turizam predstavlja čin putovanja u cilju rekreacije, kao i pribavljanje usluga radi ostvarivanja tog cilja. Sama reč turizam potiče od francuske reči tour, što u prevodu znači putovanje, obilazak, ekskurzija. Turista je osoba koja putuje najmanje osamdeset kilometara od mesta stalnog boravka u cilju rekreacije, kako je to definisala Svetska turistička organizacija.`;
let titlePrvi = `Turizam`;
let txtDrugi = `Sveobuhvatnija definicija bi bila da je turizam uslužna industrija, koja se sastoji od većeg broja opipljivih i neopipljivih elemenata. U opipljive elemente spadaju transportni sistemi - vazdušni, železnički, putni, vodeni i u novije vreme, kosmički; usluge ugostiteljstva - smeštaj, hrana i piće, obilasci, suveniri, srodni servisi kao na primer bankarstvo, osiguranje kao i bezbednost i sigurnost.Neopipljive elemente čine: odmor i relaksacija, kultura, avantura, nova i drugačija iskustva.`;
let titleDrugi = `...malo više o turizmu`;

let modalWindow = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');
let txtModal = document.querySelector('#txtModal');
let txtTitle = document.querySelector('#txtTitle');

let btnModalPrvi = document.querySelector('#openModalPrvi');
let btnModalDrugi = document.querySelector('#openModalDrugi');

let btnModalClose = document.querySelector('#closeModal');

const openModal = (txt , title) => {
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
  txtModal.innerText = txt;
  txtTitle.innerText = title;
};

// Event listener za klik na Open Modal buttone
btnModalPrvi.addEventListener("click", () => {
    openModal(txtPrvi, titlePrvi);
});

btnModalDrugi.addEventListener("click", () => {
    openModal(txtDrugi, titleDrugi);
});

/**
 * Zatvaranje modala
 */
const closeModal = () => {
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
};

// Event listener za klik na  Close Modal button
btnModalClose.addEventListener("click", closeModal);
