let allTotal = 0;

function addToCart(element) {
    let mainEl = element.closest('.card-footer');
    let price = mainEl.querySelector('.price').innerText;
    let name = mainEl.querySelector('.ime-predstave').innerText;
    let quantity = mainEl.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');

    if (parseInt(quantity) > 0) {

        price = price.substring(1);
        price = parseInt(price);

        let total = price * parseInt(quantity);

        allTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item" style="display: inline-grid; padding: 5px 30px;">
									<p class="naziv" style="margin: 0">${name}</p>
									<p>$${price} x ${quantity} = $<span class="iznos">${total}</span></p>
									<button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
									</div>`;

        document.querySelector('.total').innerText = `Total: $${allTotal}`;

        disableBtn(element);
        mainEl.querySelector('.actions button').className = 'btn-disabled';


    } else {
        alert('Odaberi količinu');
    }
}

function removeFromCart(element) {
    let mainEl = element.closest('.cart-single-item');
    let price = mainEl.querySelector('.iznos').innerText;
    let name = mainEl.querySelector('.naziv').innerText;

    let theater = document.querySelectorAll('.single-item');

    price = parseInt(price);

    allTotal -= price;

    if (allTotal !== 0) {
        document.querySelector('.total').innerText = `Total: $${allTotal}`;
    } else {
        document.querySelector('.total').innerText = ``;
    }

    mainEl.remove();

    theater.forEach(function(itemT) {

        let itemName = itemT.querySelector('.ime-predstave').innerText;

        if (itemName === name) {

            itemT.querySelector('.actions input').value = '';

            console.log(itemT.querySelector('.actions input'));
            //itemT.querySelector('.actions input').className = unesi;

            itemT.querySelector('.actions button').removeAttribute('disabled');
            itemT.querySelector('.actions button').className = 'btn-enabled';
            itemT.querySelector('.actions button').innerText = 'Potvrdi';

            console.log(itemT);
        }
    })
}

function disableBtn(element) {
    element.innerText = 'Dodato';
    element.setAttribute('disabled', 'true');
}
