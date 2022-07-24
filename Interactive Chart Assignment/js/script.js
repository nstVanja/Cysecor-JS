document.querySelector('#chart01').addEventListener('click', e => {
  e.preventDefault();

  let a= document.createElement('a');
  /*a.target= '_blank';*/
  a.href= 'website-traffic.html';
  a.click();

})

document.querySelector('#chart02').addEventListener('click', e => {
  e.preventDefault();

  let a= document.createElement('a');
  /*a.target= '_blank';*/
  a.href= 'internet-users.html';
  a.click();

})
