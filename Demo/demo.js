/**
* info js
*/
window.addEvent('domready', function() {
  $('#tweets').tweets({
    tweets:10,
    username: "ilovejQuery",
    before:  '<div class="bordesito">',
    after: '</div>'
  });
});