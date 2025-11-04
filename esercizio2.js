const KEY = "session-timer";
const timerEl = document.getElementById("timer");
let seconds = sessionStorage.getItem(KEY)
  ? parseInt(sessionStorage.getItem(KEY))
  : 0;
timerEl.textContent = seconds;
setInterval(() => {
  seconds++;
  timerEl.textContent = seconds;
  sessionStorage.setItem(KEY, seconds);
}, 1000);
