class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}

class SignInForm {
  constructor() {
    // Fields -----------------------------------
    this.signInOverlay = document.getElementById('sign-in-overlay');
    this.navSignIn = document.getElementById('nav-sign-in');
    this.signInPortal = document.querySelector('.sign-in-portal');
    this.signInPortalExit = document.getElementById('sign-in-portal-exit');
    this.emailPlaceholder = document.getElementById('email-placeholder');
    this.passwordPlaceholder = document.getElementById('password-placeholder');
    this.inputErrMsgEls = document.querySelectorAll(
      '.sign-in-portal .input-error-msg'
    );
    this.signInInputs = document.querySelectorAll('.sign-in-portal input');
    this.signInBtn = document.getElementById('sign-in-btn');

    // Event Listeners --------------------------
    this.navSignIn &&
      this.navSignIn.addEventListener('click', this.showForm.bind(this));
    this.signInPortalExit.addEventListener('click', this.hideForm.bind(this));

    this.signInInputs[0].addEventListener(
      'focus',
      this.focusEmailInput.bind(this)
    );
    this.signInInputs[1].addEventListener(
      'focus',
      this.focusPasswordInput.bind(this)
    );
    this.signInInputs[0].addEventListener(
      'blur',
      this.blurEmailInput.bind(this)
    );
    this.signInInputs[1].addEventListener(
      'blur',
      this.blurPasswordInput.bind(this)
    );

    this.signInBtn.addEventListener('click', this.signIn.bind(this));
  }

  showForm() {
    this.signInOverlay.style.display = 'block';
  }
  hideForm() {
    this.signInOverlay.style.display = 'none';
    for (const input of this.signInInputs) input.value = '';
    this.emailPlaceholder.classList.remove('placeholder-up');
    this.passwordPlaceholder.classList.remove('placeholder-up');
  }

  focusEmailInput() {
    this.emailPlaceholder.classList.add('placeholder-up');
  }
  focusPasswordInput() {
    this.passwordPlaceholder.classList.add('placeholder-up');
  }
  blurEmailInput(e) {
    if (!Validator.validateEmail(e.target.value))
      this.inputErrMsgEls[0].innerText = 'Email is invalid';
    else this.inputErrMsgEls[0].innerText = '';

    if (e.target.value) return;
    else this.emailPlaceholder.classList.remove('placeholder-up');
  }
  blurPasswordInput(e) {
    const minLength = 4;
    const maxLength = 30;
    if (!Validator.validatePassLength(e.target.value, minLength, maxLength))
      this.inputErrMsgEls[1].innerText = `${minLength} < password length < ${maxLength}`;
    else this.inputErrMsgEls[1].innerText = '';

    if (e.target.value) return;
    else this.passwordPlaceholder.classList.remove('placeholder-up');
  }

  signIn() {
    const email = this.signInInputs[0].value;
    const password = this.signInInputs[1].value;

    if (
      Validator.validateEmail(email) &&
      Validator.validatePassLength(password, 4, 30)
    ) {
      const errMsgEl = document.createElement('p');
      errMsgEl.classList.add('error-msg');
      errMsgEl.innerText = 'Failed to sign in';
      this.signInPortal.appendChild(errMsgEl);

      setTimeout(() => {
        this.signInPortal.removeChild(errMsgEl);
      }, 3000);
    }
  }
}

class SignUpForm {
  constructor() {
    // Fields -----------------------------------
    this.signUpOverlay = document.getElementById('sign-up-overlay');
    this.signUpPortal = document.querySelector('.sign-up-portal');
    this.heroSignUp = document.getElementById('hero-sign-up');
    this.signUpPortalExit = document.getElementById('sign-up-portal-exit');
    this.emailPlaceholder = document.getElementById(
      'email-placeholder-sign-up'
    );
    this.passwordPlaceholder = document.getElementById(
      'password-placeholder-sign-up'
    );
    this.confirmPlaceholder = document.getElementById('confirm-placeholder');
    this.inputErrMsgEls = document.querySelectorAll(
      '.sign-up-portal .input-error-msg'
    );
    this.signUpInputs = document.querySelectorAll('.sign-up-portal input');
    this.signUpBtn = document.getElementById('sign-up-btn');

    // Event Listeners --------------------------
    this.heroSignUp &&
      this.heroSignUp.addEventListener('click', this.showForm.bind(this));
    this.signUpPortalExit.addEventListener('click', this.hideForm.bind(this));

    this.signUpInputs[0].addEventListener(
      'focus',
      this.focusEmailInput.bind(this)
    );
    this.signUpInputs[1].addEventListener(
      'focus',
      this.focusPasswordInput.bind(this)
    );
    this.signUpInputs[2].addEventListener(
      'focus',
      this.focusConfirmInput.bind(this)
    );
    this.signUpInputs[0].addEventListener(
      'blur',
      this.blurEmailInput.bind(this)
    );
    this.signUpInputs[1].addEventListener(
      'blur',
      this.blurPasswordInput.bind(this)
    );
    this.signUpInputs[2].addEventListener(
      'blur',
      this.blurConfirmInput.bind(this)
    );

    this.signUpBtn.addEventListener('click', this.signUp.bind(this));
  }

  showForm() {
    this.signUpOverlay.style.display = 'block';
  }
  hideForm() {
    this.signUpOverlay.style.display = 'none';
    for (const input of this.signUpInputs) input.value = '';

    for (const errMsg of this.inputErrMsgEls) errMsg.innerText = '';

    this.emailPlaceholder.classList.remove('placeholder-up');
    this.passwordPlaceholder.classList.remove('placeholder-up');
    this.confirmPlaceholder.classList.remove('placeholder-up');
  }

  focusEmailInput() {
    this.emailPlaceholder.classList.add('placeholder-up');
  }
  focusPasswordInput() {
    this.passwordPlaceholder.classList.add('placeholder-up');
  }
  focusConfirmInput() {
    this.confirmPlaceholder.classList.add('placeholder-up');
  }
  blurEmailInput(e) {
    if (!Validator.validateEmail(e.target.value))
      this.inputErrMsgEls[0].innerText = 'Email is invalid';
    else this.inputErrMsgEls[0].innerText = '';

    if (e.target.value) return;
    else this.emailPlaceholder.classList.remove('placeholder-up');
  }
  blurPasswordInput(e) {
    const minLength = 4;
    const maxLength = 30;
    if (!Validator.validatePassLength(e.target.value, minLength, maxLength))
      this.inputErrMsgEls[1].innerText = `${minLength} < password length < ${maxLength}`;
    else this.inputErrMsgEls[1].innerText = '';

    if (e.target.value) return;
    else this.passwordPlaceholder.classList.remove('placeholder-up');
  }
  blurConfirmInput(e) {
    if (!Validator.confirmPassword(this.signUpInputs[1].value, e.target.value))
      this.inputErrMsgEls[2].innerText = `Password doesn't match`;
    else this.inputErrMsgEls[2].innerText = '';

    if (e.target.value) return;
    else this.confirmPlaceholder.classList.remove('placeholder-up');
  }

  signUp() {
    const email = this.signUpInputs[0].value;
    const password = this.signUpInputs[1].value;
    const password2 = this.signUpInputs[2].value;

    if (
      Validator.validateEmail(email) &&
      Validator.validatePassLength(password, 4, 30) &&
      Validator.confirmPassword(password, password2)
    ) {
      const errMsgEl = document.createElement('p');
      errMsgEl.classList.add('error-msg');
      errMsgEl.innerText = 'Failed to sign up';
      this.signUpPortal.appendChild(errMsgEl);

      setTimeout(() => {
        this.signUpPortal.removeChild(errMsgEl);
      }, 3000);
    }
  }
}
