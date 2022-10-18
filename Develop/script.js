//Display current time on page header//

const currentDay = document.getElementById("currentDay"); //gets empty <p> tag //

var now = document.createTextNode(dayjs().format("dddd, MMMM DD")); //creates text node that includes dayjs format for current date//

currentDay.appendChild(now) //appends currentDay text to empty <p> tag//




// adds CSS class based on time //
function addClass(){


// currentTime set to current number of hours
var currentTime = dayjs().hour();


//Loops function for each time-block div
$(".time-blocks").each(function ( ){
    
    //grabs the timeblock div id
    var hourBlock = parseInt($(this).attr('id'));

    // compares div id value to dayjs() time value

    //if timeblock value < the current time - display past CSS value
    if(hourBlock < currentTime){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }

    //if timeblock value = current time - display present CSS value
    else if(hourBlock === currentTime){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }

    //if timeblock value > current time - display future CSS value
    else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
});
}

//On Button press, user text value is saved in local storage
$(".btn").each(function(index){
$(this).click(function (e) {
    e.preventDefault();
    console.log("save");
    var task = $(this).siblings(".userText").val(); //grabs the value of the user text
    var time = $(this).parent().attr("id"); // saves the id of timeblock where user text value is saved
    localStorage.setItem(time, task); //saves data according to time & task
    console.log($(this).parent().attr("id"))
    
});
});




//Calls function for page styling on load
addClass();


//grabs value saved in localStorage and displays them in text area
$("#8 .userText").val(localStorage.getItem("8"))
$("#9 .userText").val(localStorage.getItem("9"))
$("#10 .userText").val(localStorage.getItem("10"))
$("#11 .userText").val(localStorage.getItem("11"))
$("#12 .userText").val(localStorage.getItem("12"))
$("#13 .userText").val(localStorage.getItem("13"))
$("#14 .userText").val(localStorage.getItem("14"))
$("#15 .userText").val(localStorage.getItem("15"))