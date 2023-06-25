import { Theme } from './theme'

const themeData = new Theme({
	title: document.querySelector('.header__title'),
	counter: document.querySelector('.timer__counter'),
	img: document.querySelector('.theme'),
	body: document.querySelector('body'),
	text: document.querySelector('.timer__text')
})

themeData.click();
themeData.loadTheme();
