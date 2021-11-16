const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")

const tempTime = new Date();
const tempYear = tempTime.getFullYear();
const tempMonth = tempTime.getMonth();
const tempDate = tempTime.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDate + 2,11,30,00);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const second = futureDate.getSeconds();

giveaway.innerHTML = `Giveaway Ends On ${weekday}, ${date} ${month} ${year}, ${hour}:${minute}am`

const getTimeRemaining = () => {
  const time = Date.now();
  const today = futureDate - time;
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const day = Math.floor(today / (24*60*60*1000));
  const hour = Math.floor((today % (24*60*60*1000))/ (60*60*1000));
  const minute = Math.floor((today % (60*60*1000))/ (60*1000));
  const second = Math.floor((today % (60*1000))/ 1000);

  values = [day, hour, minute, second];

  function format(value){
    if(value < 10){
      return "0" + value;
    }
    return value;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  })
  if(today < 0) {
    clearInterval(countdown);
    deadline.innerHTML = "Giveaway Ended";
  }
}
const countdown = setInterval(getTimeRemaining, 1000);
getTimeRemaining();