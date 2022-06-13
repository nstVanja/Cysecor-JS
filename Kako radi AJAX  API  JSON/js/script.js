// API endpoint  https://62a6efa397b6156bff8300bc.mockapi.io/Users/

document.querySelector('#fetchBtn').addEventListener('click', e => {
  e.preventDefault();

  let id = document.querySelector('#userID').value;
  console.log(id);

  let rqst = fetch('https://62a6efa397b6156bff8300bc.mockapi.io/Users/' + id).then(response => response.json()).then(data => {
    console.log(data);

    let podaci = document.querySelector('#podaci');

    podaci.innerHTML = `<p><small>email: </small><b>${data['email']}</b></p>
                        <p><small>user name: </small>${data['username']}</p>
                        <p><small>password: </small><i>${data['password']}</i></p>`;

  }).catch(error => {
    alert('Prekinuta internet veza');
  });
});
