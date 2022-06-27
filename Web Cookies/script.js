document.querySelector('#setCookie').addEventListener('click', e => {
	e.preventDefault();
	
	document.cookie = "name=cysecor";
	document.cookie = "test=test1";

	const date = new Date();

	let today = date.getTime();

	// Prebacivanje dva dana u milisekunde
	//let expires = 2 * 24 * 60 * 60 * 1000;

	let expires = 5 * 1000;

	//date.setTime(date.getTime());

	date.setTime(today + expires);

	let new_date = date.toUTCString();

	//document.cookie = "login=1; expires=Thu, 20 Sep 2022 12:00:00 UTC";

	document.cookie = `login=1; expires=${new_date}`;

	console.log(document.cookie);

});