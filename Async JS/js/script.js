// API endpoint  https://62a6efa397b6156bff8300bc.mockapi.io

//******** FETCH za sve korisnike ***********

async function fetchUsersJSON() {
  const response = await fetch('https://62a6efa397b6156bff8300bc.mockapi.io/users');

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    console.log('response.status ' + response.status);
    console.log('response.statusText ' + response.statusText);
    throw new Error(message);
  } else {
    console.log('response.status ' + response.status);
    console.log('response.statusText ' + response.statusText);
  }
  const users = await response.json();
  return users;
}

fetchUsersJSON().then(users => {
    console.log('Fetch all /users');
    console.log(users); // fetched users
  })
  .catch(error => {
    error.message; // 'An error has occurred: 404'
  });

//******** FETCH za sve korisnike i sve komentare ***********

async function fetchUsersAndComments() {
  const [usersResponse, commentsResponse] = await Promise.all([
    fetch('https://62a6efa397b6156bff8300bc.mockapi.io/users'),
    fetch('https://62a6efa397b6156bff8300bc.mockapi.io/comments')
  ]);
  const users = await usersResponse.json();
  const comments = await commentsResponse.json();
  return [users, comments];
}

fetchUsersAndComments().then(([users, comments]) => {
  console.log('Fetch all /users and /comments');
  console.log(users); // fetched users
  console.log(comments); // fetched comments

}).catch(error => {
  // /users or /comments request failed
});

//******** FETCH za jednog korisnika koji ima id = 3 ***********

async function fetchUserJSON(id) {
  const response = await fetch('https://62a6efa397b6156bff8300bc.mockapi.io/users/' + id);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  } else {
    console.log('response.status ' + response.status);
    console.log('response.statusText ' + response.statusText);
  }
  const user = await response.json();
  return user;
}

let id = 3;
fetchUserJSON(id).then(user => {
    console.log('Fetch only /users/3');
    console.log(user); // fetched user
  })
  .catch(error => {
    error.message; // 'An error has occurred: 404'
  });

//******** FETCH za jednog korisnika za HTML ***********

async function fetchUser(id) {
  const response = await fetch('https://62a6efa397b6156bff8300bc.mockapi.io/users/' + id);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
    console.log('response.status ' + response.status);
    console.log('response.statusText ' + response.statusText);
  }

  const user = await response.json();
  return user;
};

document.querySelector('#fetchBtn').addEventListener('click', e => {
  e.preventDefault();

  let id = document.querySelector('#userID').value;
  console.log(id);

  fetchUser(id).then(user => {
      console.log('Fetch /users/id: ' + user.id); // fetched user
      let podaci = document.querySelector('#podaci');
      podaci.innerHTML = `<p><small>email: </small><b>${user['email']}</b></p>
                          <p><small>user name: </small>${user['username']}</p>
                          <p><small>password: </small><i>${user['password']}</i></p>`;
    })
    .catch(error => {
      podaci.innerHTML = `<p style="color: #0B132B; font-weight: 800;">Ne postoji traženi korisnik </p>`;
      error.message; // 'An error has occurred: 404'
      console.log('Greška: ' + error.message);
    });
});
