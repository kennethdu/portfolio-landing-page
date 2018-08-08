$(document).ready(function() {
  $("button#moveButtonDark").click(function() {
	$("body").removeClass();
    $("body").addClass("dark-theme");
  });
  
  $("button#moveButtonLight").click(function() {
	$("body").removeClass("dark-theme");
  });
})
