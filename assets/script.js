var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

//

$(".saveBtn").on("click", function() {
    var calEvent = $(this).siblings("textarea").val();
    var calEventTime = $(this).siblings(".hour").text();
    
    localStorage.setItem(calEventTime, calEvent);

})

// have entered text persist in each time block on page reload

// pseudocode with tutor Joe Young
// pull out hour from moment
var realHour = moment().format("H");
    console.log(realHour);
// pull attribute from HTML, .each
// for loop to repeat time comparison logic - use "this"
$(".hour").each(function (){
//parseInt() look at .split or .splice
    var currentHour = parseInt($(this).attr("id").split("hour-")[1]);
    /* console.log($(this).attr("id").split("hour-")[1]);
    console.log(currentHour); */

// func to turn past events red
if (currentHour < realHour) {
    $(this).siblings(".description").addClass("past"); 
}

// hour = current hour = green
else if (currentHour == realHour) {
    $(this).siblings(".description").addClass("present");
}

/// hour > current = blue
else if (currentHour > realHour) {
    $(this).siblings(".description").addClass("future");
}
})


// local.Storage.getItem


// add MT id to times