// Kreiranje "close" button-a i njegovo dodavanje na svaki član liste
let mojaLista = document.querySelectorAll('li');

console.log('Selektovani svi <li> tagovi: ');
console.log(mojaLista);

let i;
for (i = 0; i < mojaLista.length; i++) {
  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');

  span.className = 'close';
  span.appendChild(txt);

  mojaLista[i].appendChild(span);
}

// Click on a close button to hide the current list item
// let close = document.querySelectorAll('.close');// ne radi
let close = document.getElementsByClassName('close');

deleteElement(close);

// Add a "checked" symbol when clicking on a list item
// Target tagName mora velikim slovima LI.
let lista = document.querySelector('ul');
lista.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Trigeruje dodavanje posle klika na Enter
let ulaz = document.querySelector('input');
ulaz.addEventListener("keypress", function(klikNaEnter) {
  if (klikNaEnter.key === "Enter") {
    klikNaEnter.preventDefault();
    document.getElementById("myBtn").click();
  }
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.querySelector('input').value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.querySelector('ul').appendChild(li);
  }
  document.querySelector('input').value = "";

  let span = document.createElement('span');
  let txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  console.log("Novi item: ");
  console.log(li);

  deleteElement(close);
}

function deleteElement() {
  console.log("'.close' klase koje mogu da se brisu: ");
  console.log(close);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;

      // select the target element
      const e = document.querySelector('ul');

      console.log("element koji se brise: ");
      console.log(div);

      // remove the list item
      e.removeChild(div);
    }
  }
}
