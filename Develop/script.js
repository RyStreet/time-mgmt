//Display current time on page header//

const currentDay = document.getElementById("currentDay"); //gets empty <p> tag //

var now = document.createTextNode(dayjs().format("dddd, MMMM DD")); //creates text node that includes dayjs format for current date//

currentDay.appendChild(now) //appends currentDay text to empty <p> tag//




// adds CSS class based on time //
function addClass(){

console.log("add Class")
console.log(dayjs().hour())

// currentTime set to current number of hours
var currentTime = dayjs().hour();
console.log(currentTime)

$(".time-blocks").each(function ( ){
    
    var hourBlock = parseInt($(this).attr('id').split('hour')[1]);
    console.log(hourBlock)

    if(hourBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }

    else if(hourBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }

    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}



$(".btn").click(function (e) {
    e.preventDefault();
    console.log("save");
    var task = $(this).siblings(".userText").val();
    localStorage.setItem("task", task);
});

addClass();