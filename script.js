$(document).ready(function () {
  $("#todo-submit").click(function () {
    var value = $("#todo-input").val();
    console.log(value);
    if (value !== "") {
      var newElement = $(`<li>${value}</li>`);
      $(".todo-list").append(newElement);
      $("h3").hide();
      $(newElement).click(function () {
        $(this).toggleClass("tachado");
      });
    }
    $("#todo-input").val("");
  });
});
