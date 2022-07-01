var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

//

$(".saveBtn").on("click", function() {
    var calEvent = $(this).siblings("textarea").val();
    var calEventTime = $(this).siblings(".hour").text();
    
    localStorage.setItem(calEventTime, calEvent);

})

// have entered text persist in each time block on page reload

// func to turn past events red
// func to turn current hour different color
// func to turn future hours different color


// pull attribute from HTML, .each
$(".hour").each(function (){
//parseInt() look at .split or .splice
parseInt()
// pull out hour from moment
// for loop to repeat time comparison logic - use "this"
// var hour < current hour = red
// func to turn past events red
// hour = current hour = green
// func to turn current hour different color
/// hour > current = blue
})


// local.Storage.getItem

// add MT id to times