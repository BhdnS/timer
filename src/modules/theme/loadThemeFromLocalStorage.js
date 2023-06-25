import sun from '../../images/theme/sun.svg';
import moon from '../../images/theme/moon.svg';

function loadThemeFromLocalStorage() {
	const theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		this.title.classList.remove('white');
		this.counter.classList.remove('white')
		this.body.classList.remove('black')
		this.text.classList.remove('white')
		this.img.classList.add('sun')
		this.img.classList.remove('moon')
		this.img.src = sun;
	} else {
		this.title.classList.add('white');
		this.counter.classList.add('white')
		this.body.classList.add('black')
		this.text.classList.add('white')
		this.img.classList.remove('sun')
		this.img.classList.add('moon')
		this.img.src = moon;
	}
}

export default loadThemeFromLocalStorage;
