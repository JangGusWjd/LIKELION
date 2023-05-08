const days = document.getElementById("date");
const clock = document.getElementById("time");

function showClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const weeks = ["SUN", "MON", "TUE", "WED", "THUR", "FIR", "SAT"];
  const week = weeks[date.getDay()];
  days.innerText = `${year} - ${month} - ${day}  ${week}`;

  let hour = date.getHours();
  //   let hour = 20;
  let morning;
  if (hour >= 12) {
    morning = "PM";
    hour = hour - 12;
  } else {
    morning = "AM";
  }
  hour = String(hour).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour} : ${minute} : ${seconds}  ${morning}`;
}

showClock();
setInterval(showClock, 1000);
