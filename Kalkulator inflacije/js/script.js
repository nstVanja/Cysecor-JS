function inflationCalculator() {

	let inflationRate = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');

	// parseFloat sluzi za pretvaranje stringa u decimalni broj.
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);

	let years = document.querySelector('#years').value;
	years = parseFloat(years);

	// Formula za izracunavanje inflacije.
	let worth = money + (money * (inflationRate / 100));

	for(let i = 1; i < years; i++) {
		worth += worth * (inflationRate / 100);
	}

	worth = worth.toFixed(2);

	if (inflationRate > 0 && money > 0 && years > 0) {
		let newElement = document.createElement('div');
		newElement.className = 'new-value';
		newElement.innerText = `Današnjih ${money} € vredi isto kao ${worth} € za ${years} godina ako je inflacija ${inflationRate}%.`;

		document.querySelector('.container').appendChild(newElement);

	} else {
		alert('Obavezan je unos svih polja!');
	};
}
