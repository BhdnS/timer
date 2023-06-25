import Timer from './timer';

const timerData = new Timer({
  btnStart: document.querySelector('.btn__start'),
  btnPause: document.querySelector('.btn__pause'),
  btnStop: document.querySelector('.btn__stop'),
  hour: document.querySelector('#hour'),
  minutes: document.querySelector('#minutes'),
  second: document.querySelector('#second'),
  btnCircle: document.querySelector('.btn__circle'),
  text: document.querySelector('.timer__text'),
  counter: document.querySelector('.timer__counter'),
  btnReset: document.querySelector('.btn__reset'),
  msecond: document.querySelector('#msecond'),
});
