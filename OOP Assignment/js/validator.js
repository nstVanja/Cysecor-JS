class Validator {
  constructor(config) {
    this.elementsConfig = config;
    this.errors = {};

    this.generateErrorsObject();
    this.inputListener();
  }

  generateErrorsObject() {
    for (let field in this.elementsConfig) {
      this.errors[field] = [];
    }
  }

  inputListener() {
    let inputSelector = this.elementsConfig;

    for (let field in inputSelector) {
      let el = document.querySelector(`input[name="${field}"]`);

      el.addEventListener('input', this.validate.bind(this));
    }
  }

  validate(e) {
    // elFields su sva polja
    let elFields = this.elementsConfig;

    //  e  je  jedno polje
    let field = e.target;
    let fieldName = field.getAttribute('name');
    let fieldValue = field.value;

    this.errors[fieldName] = [];

    if (elFields[fieldName].required) {
      if (fieldValue === '') {
        this.errors[fieldName].push('Polje je prazno');
      }
    }

    if (fieldName === 'korisnicko_ime') {

      if (!this.validateUserName(fieldValue)) {
        this.errors[fieldName].push('Korisničko ime ne sme da sadrži space karakter');
      } else {
        console.log('Ispravno korisničko ime');
      }
    }

    if (elFields[fieldName].email) {
      if (!this.validateEmail(fieldValue)) {
        this.errors[fieldName].push('Neispravna email adresa');
      }
    }

    if (fieldValue.length < elFields[fieldName].minlength || fieldValue.length > elFields[fieldName].maxlength) {
      this.errors[fieldName].push(`Polje mora imati minimalno ${elFields[fieldName].minlength}, a maksimalno ${elFields[fieldName].maxlength} karaktera`);
    }

    if (elFields[fieldName].matching) {
      let matchingEl = document.querySelector(`input[name="${elFields[fieldName].matching}"]`)

      if (fieldValue !== matchingEl.value) {
        this.errors[fieldName].push('Lozinke se ne poklapaju');
      }
      //sprecava greske kod poredjenja lozinki
      if (this.errors[fieldName].length === 0) {
        this.errors[fieldName] = [];
        this.errors[elFields[fieldName].matching] = [];
      }
    }

    this.populateErrors(this.errors);
  }

  populateErrors(errors) {
    for (const elem of document.querySelectorAll('ul')) {
      elem.remove();
    }

    for (let key of Object.keys(errors)) {
      let parentElement = document.querySelector(`input[name="${key}"]`).parentElement;
      let errorsElement = document.createElement('ul');
      parentElement.appendChild(errorsElement);

      errors[key].forEach(error => {
        let li = document.createElement('li');
        li.innerText = error;

        errorsElement.appendChild(li);
      });
    }
  }

  validateEmail(email) {
    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email.value)) {
      return true;
    }
    //alert("You have entered an invalid email address!")
    return false;
  }

  validateUserName(username) {

    let position = username.search(/ /i);;
    if (position === -1) {
      return true;
    }

    return false;
  }
  //Moze i sa username trimovanjem

  /*
      const checkUsername = () => {

      let valid = false;
      const username = usernameEl.value.trim();

      if (!isRequired(username)) {
          showError(usernameEl, 'Username cannot be blank.');
      } else {
          showSuccess(usernameEl);
          valid = true;
      }
      return valid;
      }*/

}
