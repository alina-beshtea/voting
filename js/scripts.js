$(document).ready(function() {
  var age = parseInt(prompt("how old are you?"));

  if (age >= 17) {
    $('#over18').show();

  } else {
    $('#under18').show();

}
});
