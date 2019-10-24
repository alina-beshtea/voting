$(document).ready(function() {
  $("form#ageCheck") = submit(function(event) {
    var over18

  if (age > 17) {
    $('#over18').show();
    alert('please vote')
  } else {
    $('#under18').show();
  alert('illigal')
}
});
});
