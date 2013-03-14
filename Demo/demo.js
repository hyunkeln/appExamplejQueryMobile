/**
* info js
*/
  

$.getScript("https://raw.github.com/kerberoS/jQuery-Tweets/master/js/jquery.tweets.0.1.js")
.done(function(script, textStatus) {
  $('#tweets').tweets({
    tweets:10,
    username: "ilovejQuery",
    before:  '<div class="bordesito">',
    after: '</div>'
  });
}) 