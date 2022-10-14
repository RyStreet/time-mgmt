//Display current time on page header//

var currentDay = document.getElementById("currentDay"); //gets empty <p> tag //

var now = document.createTextNode(dayjs().format("dddd, MMMM DD")); //creates text node that includes dayjs format for current date//

currentDay.appendChild(now) //appends currentDay text to empty <p> tag//


// var button = document.getElementsByClassName("save")[0];

// button.addEventListener("click", saveTask);


// function saveTask(event) {
//     event.preventDefault();
//     console.log("save")
//     // var task = document.getElementById("userText").value;
//     var task = $(this).siblings("#userText").val();
//     localStorage.setItem("task", task);
// }

$(".btn").click(function (e) {
    e.preventDefault();
    console.log("save");
    var task = $(this).siblings(".userText").val();
    localStorage.setItem("task", task);
});

