$(document).ready(function() {

    // var colors = ["red", "blue", "green", "goldenrod"];

    $(".header").click(function() {
        // $(this).css("background-color", colors[Math.floor(Math.random() * 4)]);
        $(this).css("background-color", "red");
    });

    $(".sidebar").click(function() {
        $(this).children("p:first-of-type").html("Leftbar");
    });

    $(".extra-content").click(function() {
        $(".main-content").fadeOut();
    });

    $(".footer").click(function() {
        $(".popup").fadeIn();
    });

    $(".popup img").click(function() {
        $(".popup").fadeOut();
    })
});