let count = 1;

export function pauseTimer(timerId) {
  clearInterval(timerId);
}

export function stopTimer(timerInstance) {
    timerInstance.count = 0;
    timerInstance.countMsecond = 0;
    timerInstance.countMinutes = 0;
    timerInstance.countHour = 0;
    timerInstance.hour.innerText = formatNumber(timerInstance.countHour);
    timerInstance.minutes.innerText = formatNumber(timerInstance.countMinutes);
    timerInstance.second.innerText = formatNumber(timerInstance.count);
    timerInstance.msecond.innerText = formatNumber(timerInstance.countMsecond, 2);
}

export function startTimer(timerInstance) {
  timerInstance.timerId = setInterval(() => {
    timerInstance.countMsecond++;
    updateTimerDisplay(timerInstance);

  if (timerInstance.countMsecond === 99) {
    timerInstance.countMsecond = 0;
    timerInstance.second.innerText = timerInstance.count++
  }

  if (timerInstance.count === 59) {
    timerInstance.count = 0;
    timerInstance.minutes.innerText = timerInstance.countMinutes++;
  }

  if (timerInstance.countMinutes === 59) {
    timerInstance.countMinutes = 0;
    timerInstance.hour.innerText = timerInstance.countHour++;
  }


  }, 10);
}

export function circleTimer(timerInstance) {
  const text = `<p class="circle">${count++}. ${timerInstance.counter.textContent}</p>`
  timerInstance.text.insertAdjacentHTML('beforeend', text);
}

export function resetTimer(timerInstance) {
  count = 1;
  stopTimer(timerInstance);
  const circleText = document.querySelectorAll('.circle');
  circleText.forEach(e => e.remove());
}

function updateTimerDisplay(timerInstance) {
  const formattedTime = formatTime(timerInstance.countHour, timerInstance.countMinutes, timerInstance.count, timerInstance.countMsecond);
  const [formattedHour, formattedMinutes, formattedSeconds, formattedMilliseconds] = formattedTime;
  
  timerInstance.hour.innerText = formattedHour;
  timerInstance.minutes.innerText = formattedMinutes;
  timerInstance.second.innerText = formattedSeconds;
  timerInstance.msecond.innerText = formattedMilliseconds;
}

function formatTime(hours, minutes, seconds, milliseconds) {
  const formattedHour = formatNumber(hours);
  const formattedMinutes = formatNumber(minutes);
  const formattedSeconds = formatNumber(seconds);
  const formattedMilliseconds = formatNumber(milliseconds, 2);
  return [formattedHour, formattedMinutes, formattedSeconds, formattedMilliseconds];
}

export function formatNumber(number, digits = 2) {
  return String(number).padStart(digits, '0');
}