//Display current time on page header//

var currentDay = document.getElementById("currentDay"); //gets empty <p> tag //

var now = document.createTextNode(dayjs().format("dddd, MMMM DD")); //creates text node that includes dayjs format for current date//

currentDay.appendChild(now) //appends text to empty <p> tag//