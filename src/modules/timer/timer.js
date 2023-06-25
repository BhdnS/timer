import { circleTimer, pauseTimer, resetTimer, startTimer, stopTimer, formatNumber } from './timerUtils'

export default class Timer {
  constructor(params) {
    this.btnStart = params.btnStart;
    this.btnPause = params.btnPause;
    this.btnStop = params.btnStop;
    this.btnCircle = params.btnCircle;
    this.hour = params.hour;
    this.minutes = params.minutes;
    this.second = params.second;
    this.text = params.text;
    this.counter = params.counter;
    this.btnReset = params.btnReset;
    this.msecond = params.msecond;

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
    startTimer(this);
  }

  pause() {
    pauseTimer(this.timerId);
  }

  stop() {
    stopTimer(this)
  }

  circleClick() {
    circleTimer(this)
  }

  reset() {
    resetTimer(this)
  }

}
