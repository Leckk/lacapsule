// My Crappy JS Skills :/
  $(".hiddenBegin").addClass("hidden");
$(".sign-up").on('click', function() {
  $(".button").addClass("expanded");
  $(".sign-up").addClass("hidden");
  $(".content").addClass("background");
  $("button").removeClass("hidden");
  $("form").toggleClass("hidden");
})

$("button").on('click', function() {
  $(this).addClass("fab");
  $("form").addClass("hidden");
  $(".text").remove();
  $(".header").removeClass("hidden");
  $(".hiddenBegin").removeClass("hidden");
})