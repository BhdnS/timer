import clickTheme from './clickThemeUtils'
import loadThemeFromLocalStorage from './loadThemeFromLocalStorage'

export class Theme {
	constructor(params) {
		this.title = params.title;
		this.counter = params.counter;
		this.img = params.img;
		this.body = params.body;
		this.text = params.text;
	}

	click() {
		clickTheme(this.title, this.counter, this.img, this.body, this.text);
	}

	loadTheme() {
		loadThemeFromLocalStorage.call(this);
	}
}