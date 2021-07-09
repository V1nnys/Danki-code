/*
$(function () {
  alert("Olá mundo!");
});
*/
/*
$(document).ready(function () {
    alert("Olá mundo2!");
});
*/
/*
$(window).on("load", function () {
  alert("Olá mundo3!");
});
*/
/*
$(function () {
  //   $(".artigo1").css("background-color", "#ccc");
//   $("#teste").css("padding-left", "20px").css("background-color", "red");
   no caso do padding chamamos cada lado por vez
});
*/
/*
$(function () {
  setTimeout(function () {
    $("#teste.artigo1").css("background-color", "blue");
  }, 2000);
});
*/

$(function () {
  $("#teste.artigo1").css("padding-left", "40px");
  $(".artigo1 > p").css("color", "blue");

  setTimeout(function () {
    $("#teste.artigo1").css("background-color", "blue");
  }, 2000);

  setTimeout(function () {
    $(".artigo1 > p").css("color", "red");
  }, 3000);
});

$(function () {
  $(".artigo1 > p").css("color", "green");
  console.log($(".artigo1 > p").css("color"));
});
