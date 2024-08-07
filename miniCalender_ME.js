let date = new Date();
//! date today
let daydate = document.getElementById("daydate");
daydate.innerHTML = date.getDate();

//! year
let year = document.getElementById("year");
year.innerHTML = date.getFullYear();

// ! month
let monthArray = [
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

let month = document.getElementById("month");
let thismonth = monthArray[date.getMonth()];
month.innerHTML = thismonth;

// ! day
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
let day = document.getElementById("day");
let todayday = days[date.getDay()]
day.innerHTML = todayday;





  


