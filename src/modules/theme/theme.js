import sun from '../../images/theme/sun.svg';
import moon from '../../images/theme/moon.svg';

export default class Theme {
  constructor() {
    this.title = document.querySelector('.header__title');
    this.counter = document.querySelector('.timer__counter');
    this.img = document.querySelector('.theme');
    this.body = document.querySelector('body');
    this.text = document.querySelector('.timer__text');
  }

  click() {
    this.img.addEventListener('click', () => {
      if (this.img.classList.contains('sun')) {
        this.title.classList.add('white');
        this.counter.classList.add('white');
        this.body.classList.add('black');
        this.text.classList.add('white');
        this.img.classList.remove('sun');
        this.img.classList.add('moon');
        this.img.src = moon;

        localStorage.setItem('theme', 'light');
      } else if (this.img.classList.contains('moon')) {
        this.title.classList.remove('white');
        this.counter.classList.remove('white');
        this.body.classList.remove('black');
        this.text.classList.remove('white');
        this.img.classList.add('sun');
        this.img.classList.remove('moon');
        this.img.src = sun;

        localStorage.setItem('theme', 'dark');
      }
    });
  }

  loadTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.title.classList.remove('white');
      this.counter.classList.remove('white');
      this.body.classList.remove('black');
      this.text.classList.remove('white');
      this.img.classList.add('sun');
      this.img.classList.remove('moon');
      this.img.src = sun;
    } else {
      this.title.classList.add('white');
      this.counter.classList.add('white');
      this.body.classList.add('black');
      this.text.classList.add('white');
      this.img.classList.remove('sun');
      this.img.classList.add('moon');
      this.img.src = moon;
    }
  }
}
