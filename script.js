const day = document.getElementById("days");
const hour = document.getElementById("hrs");
const min = document.getElementById("mins");
const sec = document.getElementById("secs");
const stop = document.getElementById("stop");

function daysAndTimeLeft() {
  const date = new Date();
  const endDate = new Date(date.getFullYear(), 11, 31, 23, 59, 59);
  // console.log(endDate.toJSON());

  const diff = endDate - date;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  day.innerHTML = days;
  hour.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;

}


const timeInterval= setInterval(daysAndTimeLeft, 1000);

stop.onclick = () => {
clearInterval(timeInterval);
}

