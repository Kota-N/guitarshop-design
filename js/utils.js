class Validator {
  static validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim().toLowerCase());
  }

  static validatePassLength(password, min, max) {
    return password.trim().length > min && password.trim().length < max;
  }

  static confirmPassword(password, password2) {
    return password === password2;
  }
}

