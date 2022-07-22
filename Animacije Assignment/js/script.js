let textTag = document.querySelector('#section05 h1');
let text = textTag.textContent;

let splittedText = text.split('');

textTag.innerHTML = '';

for (let i = 0; i < splittedText.length; i++) {
  if (splittedText[i] == " ") {
    splittedText[i] = "&nbsp;";
  }

  textTag.innerHTML += `<span>${splittedText[i]}</split>`;
}

console.log(textTag);

let spans = textTag.querySelectorAll('span');

let k = 0;
let interval = setInterval(() => {
  let singleSpan = spans[k];

  singleSpan.className = 'fadeMove';
  k++;

  if (k === spans.length) {
    clearInterval(interval);
  }
}, 70);

window.onscroll = () => {
  imageAnimation();
};

const imageAnimation = () => {
  let sectionForAnimation = document.querySelector('#section04 .images');
  let sectionPositon = sectionForAnimation.getBoundingClientRect().top;

  /**
   * Za 30% se mora uci u section2 da bi krenula animacija
   **/
  let screenPosition = window.innerHeight / 1.3;

  console.log('section position: ' + sectionPositon);
  console.log('screen position:  ' + screenPosition);

  let leftImage = document.querySelector('.slideFromLeft');
  let rightImage = document.querySelector('.slideFromRight');

  if (sectionPositon < screenPosition) {
    leftImage.classList.add('animated');
    rightImage.classList.add('animated');
  };
};
