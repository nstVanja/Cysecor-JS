let logo = document.querySelector('.lnXdpd');

//console.log(logo);

if (logo != null) {
    logo.src = chrome.runtime.getURL('images/cysecor_logo.png');
    logo.srcset = chrome.runtime.getURL('images/cysecor_logo.png');
}

let logoLeft = document.querySelector('div.logo');

//console.log('***');

let logoSmall = document.querySelectorAll('div .logo img');

//console.log(logoSmall[0].src);
//console.log(logoSmall);

if (logoSmall != null) {
    logoSmall[0].src = chrome.runtime.getURL('images/cysecor_logo.png');
    logoSmall[0].style = ('height: 70px !important; width: 70px !important;');
    logoSmall[0].alt = ('Cysecor');
}

//console.log('***');
//console.log(logoSmall);
