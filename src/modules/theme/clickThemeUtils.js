import sun from '../../images/theme/sun.svg';
import moon from '../../images/theme/moon.svg';

function clickTheme(title, counter, img, body, text) {
  img.addEventListener('click', () => {
    if (img.classList.contains('sun')) {
      title.classList.add('white');
      counter.classList.add('white');
      body.classList.add('black');
      text.classList.add('white');
      img.classList.remove('sun');
      img.classList.add('moon');
      img.src = moon;

      localStorage.setItem('theme', 'light');
    } else if (img.classList.contains('moon')) {
      title.classList.remove('white');
      counter.classList.remove('white');
      body.classList.remove('black');
      text.classList.remove('white');
      img.classList.add('sun');
      img.classList.remove('moon');
      img.src = sun;

      localStorage.setItem('theme', 'dark');
    }
  });
}

export default clickTheme;
