// takes snapshot of current date
var today = moment();
// sets format of current date and adds it to HTML
$("#currentDay").text(today.format("MMMM Do, YYYY"));

// creates key and value of each time and event;
$(".saveBtn").on("click", function() {
    var calEvent = $(this).siblings("textarea").val();
    var calEventTime = $(this).siblings(".hour").text();
    // saves to localStorage
    localStorage.setItem(calEventTime, calEvent);
})

// pulls hour from moment() snapshot; sets to var realHour
var realHour = moment().format("H");

// loops over each instance of ".hour", traverses to the id, splits "hour-" from
// the id, creating an array of just the numerical value in the id; 
// returns index[1] (the numerical value); saves to var currentHour
$(".hour").each(function (){
    var currentHour = parseInt($(this).attr("id").split("hour-")[1]);

// if currentHour < realHour, traverse to sibling with class "description"
// and addClass "past" (turn red) 
if (currentHour < realHour) {
    $(this).siblings(".description").addClass("past"); 
}

// if currentHour == realHour, traverse to sibling with class "description"
// and addClass "present" (turn green) 
else if (currentHour == realHour) {
    $(this).siblings(".description").addClass("present");
}

// if currentHour > realHour, traverse to sibling with class "description"
// and addClass "future" (turn blue) 
else if (currentHour > realHour) {
    $(this).siblings(".description").addClass("future");
}
})

// data persistence in entered fields;
// locates each id "#hour-n", traverses to sibling with element "textarea",
// loads property from corresponding key in localStorage
$("#hour-9").siblings("textarea").text(localStorage.getItem("9 AM"));
$("#hour-10").siblings("textarea").text(localStorage.getItem("10 AM"));
$("#hour-11").siblings("textarea").text(localStorage.getItem("11 AM"));
$("#hour-12").siblings("textarea").text(localStorage.getItem("12 PM"));
$("#hour-13").siblings("textarea").text(localStorage.getItem("1 PM"));
$("#hour-14").siblings("textarea").text(localStorage.getItem("2 PM"));
$("#hour-15").siblings("textarea").text(localStorage.getItem("3 PM"));
$("#hour-16").siblings("textarea").text(localStorage.getItem("4 PM"));
$("#hour-17").siblings("textarea").text(localStorage.getItem("5 PM"));