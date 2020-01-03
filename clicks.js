//selected lounge button
$("#selectedLounge").on("click", function() {
    window.location.href = "/"
},


//lounges button - goes back to homepage
$("#lounges").on("click", function() {
    window.location.href = "/home";
},


//up-vote & down-vote buttons
var counter = 0;
$("#upVote").on("click", function() {
    counter++;
},

$("#downVote").on("click", function() {
    counter--;

},

//add song button (plus sign)
$("#addSong").on("click", function() {
    $("#song").val();
},

//add lounge button
$("#addLounge").on("click", function() {

}
