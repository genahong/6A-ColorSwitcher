//when the gray button is clicked, we want the background to turn gray, and the font to turn white 

$("#grayButton").click(function() {
  grayButton();
});


$("#whiteButton").click(function() {
  whiteButton();
});

function whiteButton () {
  $("body").css("background-color", "white");
  $("body").css("color", "black");
}

//this is the function that makes the changes
function grayButton () {
  $("body").css("background-color", "gray");
  $("body").css("color", "white")
}






















