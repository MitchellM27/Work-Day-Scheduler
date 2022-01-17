var text9am = $("#hour9");
var text10am = $("#hour10");
var text11am = $("#hour11");
var text12pm = $("#hour12");
var text1pm = $("#hour1");
var text2pm = $("#hour2");
var text3pm = $("#hour3");
var text4pm = $("#hour4");
var text5pm = $("#hour5");

let timeArray = [
    text9am,
    text10am,
    text11am,
    text12pm,
    text1pm,
    text2pm,
    text3pm,
    text4pm,
    text5pm,
];

var saveButton = $(".saveBtn")


function loadTime () {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));

    currentTime = moment().format("HH");
    console.log(currentTime);
    for (i = 0; i <timeArray.length; i++) {
        
        if (currentTime === timeArray[i].data("time")) {
            timeArray[i].addClass("present");
        } else if (currentTime > timeArray[i].data("time")) {
            timeArray[i].addClass("past");
        } else {
            timeArray[i].addClass("future");
        }
    }

};

loadTime ();

function handleFormSubmit(event) {
    event.preventDefault();

    let saveTarget = $(event.currentTarget);

    let textTarget = saveTarget.siblings("textarea");
 
    let timeTarget = textTarget.data("time");

    localStorage.setItem("days events" +  timeTarget, textTarget.val());
}

saveButton.on("click", handleFormSubmit);

function renderEvents() {

    for (let el of timeArray) {
        el.val(localStorage.getItem("days events" + el.data("time")));

}}

function init () {
    renderEvents();
}
init();