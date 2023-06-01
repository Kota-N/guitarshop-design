class CartItemsPortal {
  static overlay = document.getElementById('cart-items-overlay');

  static appendErrMsg(msg) {
    const cartItemsPortal = this.overlay.querySelector('.cart-items-portal');

    cartItemsPortal.insertAdjacentHTML(
      'beforeend',
      `<div class="failed-to-remove">${msg}</div>`
    );

    setTimeout(() => {
      cartItemsPortal.removeChild(
        document.querySelector('.cart-items-portal .failed-to-remove')
      );
    }, 3000);
  }

  static prepareExitPortal() {
    document
      .getElementById('cart-items-portal-exit')
      .addEventListener('click', () => {
        this.overlay.innerHTML = '';
        this.overlay.style.display = 'none';
      });
  }
}

class Nav {
  static header = document.querySelector('header');

  static appendDefaultNav() {
    this.header.insertAdjacentHTML(
      'beforeend',
      `<nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
              <div class="underline"></div>
            </li>
            <li>
              <a href="index.html">Shop</a>
              <div class="underline"></div>
            </li>
            <li class="nav-sign-in" id="nav-sign-in"><a href="#">Sign In</a></li>
            <li id="nav-cart">
              <a href="#"><i class="fas fa-shopping-cart"></i></a>
            </li>
          </ul>
        </nav>`
    );

    const navCart = document.getElementById('nav-cart');

    navCart.addEventListener('click', () => {
      navCart.insertAdjacentHTML(
        'beforeend',
        `
      <div class="sign-in-required-msg">Please sign in</div>`
      );

      setTimeout(() => {
        navCart.removeChild(document.querySelector('.sign-in-required-msg'));
      }, 3000);
    });
  }
}

class HeroSection {
  static heroTextContainer = document.querySelector('.hero .text-container');

  static jokeCount = 0;

  static appendSignUpBtn() {
    this.heroTextContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="hero-sign-up" id="hero-sign-up">Sign Up</div>`
    );
  }

  static appendJokeAPIBtn() {
    this.heroTextContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="hero-sign-up" id="joke-btn">Tell Me A Programming Joke</div>`
    );

    document.getElementById('joke-btn').addEventListener('click', async () => {
      const joke = await this.fetchJoke();

      if (!this.jokeCount) {
        this.appendJoke(joke);
        this.jokeCount++;
      } else {
        this.replaceJoke(joke);
      }
    });
  }

  static async fetchJoke() {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single'
    );
    const jokeData = await res.json();
    return jokeData.joke;
  }

  static appendJoke(joke) {
    this.heroTextContainer.insertAdjacentHTML(
      'beforeend',
      `<p class="joke">${joke}</p>`
    );
  }

  static replaceJoke(joke) {
    document.querySelector('.hero .text-container .joke').remove();

    this.heroTextContainer.insertAdjacentHTML(
      'beforeend',
      `<p class="joke">${joke}</p>`
    );
  }
}

