var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

// type event into textarea
// AtC button saves to local storage
    // need to link text area input to each corresponding button

/* $("#9btn").on("click", function (event){
    var text9 = $("#9am").children("textarea").val();
    var time = $("#9am").children(".hour").text()

    localStorage.setItem(time, text9); */

    $(".saveBtn").click(function(event) {
        var calEvent = $(event.target).sibling("textarea").val;
        var calEventTime = $(event.target).sibling(".hour").text;
        
        localStorage.setItem(calEventTime, calEvent);

    })
/* }) */

$("#10btn").on("click", function (){
    var text10 = $("#10am").children("textarea").val();
    var time = $("#10am").children(".hour").text()

    localStorage.setItem(time, text10);
})
// repeat for each button?
// consolidate with event.target?

// have entered text persist in each time block on page reload

// func to turn past events red
// func to turn current hour different color
// func to turn future hours different color

