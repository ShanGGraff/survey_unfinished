//Business Logic
  
//UserInterface Logic

$(document).ready(function() {
	$("form#favoriteFood").click(function() {
  event.preventDefault();
	const food = parseInt($("#favoriteFood").val());
  

	$("form.radio").click(function() {
  event.preventDefault();
  const genre = $("input:radio[name=genre]:checked").val();
  }