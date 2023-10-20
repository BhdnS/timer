export default class Timer {
  constructor() {
    this.btnStart = document.querySelector('.btn__start');
    this.btnPause = document.querySelector('.btn__pause');
    this.btnStop = document.querySelector('.btn__stop');
    this.hour = document.querySelector('#hour');
    this.minutes = document.querySelector('#minutes');
    this.second = document.querySelector('#second');
    this.btnCircle = document.querySelector('.btn__circle');
    this.text = document.querySelector('.timer__text');
    this.counter = document.querySelector('.timer__counter');
    this.btnReset = document.querySelector('.btn__reset');
    this.msecond = document.querySelector('#msecond');

    this.count = 0;
    this.countMsecond = 0;
    this.countMinutes = 0;
    this.countHour = 0;
    this.timerId = null;

    this.btnStart.addEventListener('click', this.start.bind(this));
    this.btnPause.addEventListener('click', this.pause.bind(this));
    this.btnStop.addEventListener('click', this.stop.bind(this));
    this.btnCircle.addEventListener('click', this.circleClick.bind(this));
    this.btnReset.addEventListener('click', this.reset.bind(this));
  }

  start() {
    this.timerId = setInterval(() => {
      this.countMsecond++;
      this.updateTimerDisplay();

      if (this.countMsecond === 99) {
        this.countMsecond = 0;
        this.second.innerText = this.count++;
      }

      if (this.count === 59) {
        this.count = 0;
        this.minutes.innerText = this.countMinutes++;
      }

      if (this.countMinutes === 59) {
        this.countMinutes = 0;
        this.hour.innerText = this.countHour++;
      }
    }, 10);
  }

  pause() {
    clearInterval(this.timerId);
  }

  stop() {
    this.pause(this.timerId);
    this.count = 0;
    this.countMsecond = 0;
    this.countMinutes = 0;
    this.countHour = 0;
    this.hour.innerText = this.formatNumber(this.countHour);
    this.minutes.innerText = this.formatNumber(this.countMinutes);
    this.second.innerText = this.formatNumber(this.count);
    this.msecond.innerText = this.formatNumber(this.countMsecond, 2);
  }

  circleClick() {
    const text = `<p class="circle">${this.count++}. ${this.counter.textContent}</p>`;
    this.text.insertAdjacentHTML('beforeend', text);
  }

  reset() {
    this.count = 1;
    this.stop();
    const circleText = document.querySelectorAll('.circle');
    circleText.forEach((e) => e.remove());
  }

  formatNumber(number, digits = 2) {
    return String(number).padStart(digits, '0');
  }

  formatTime(hours, minutes, seconds, milliseconds) {
    const formattedHour = this.formatNumber(hours);
    const formattedMinutes = this.formatNumber(minutes);
    const formattedSeconds = this.formatNumber(seconds);
    const formattedMilliseconds = this.formatNumber(milliseconds, 2);
    return [formattedHour, formattedMinutes, formattedSeconds, formattedMilliseconds];
  }

  updateTimerDisplay() {
    const formattedTime = this.formatTime(this.countHour, this.countMinutes, this.count, this.countMsecond);
    const [formattedHour, formattedMinutes, formattedSeconds, formattedMilliseconds] = formattedTime;

    this.hour.innerText = formattedHour;
    this.minutes.innerText = formattedMinutes;
    this.second.innerText = formattedSeconds;
    this.msecond.innerText = formattedMilliseconds;
  }
}
