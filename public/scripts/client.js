
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const createTweetElement = function (data) {
  return markup = `
  <br>
  <article class="tweet1">
    <div class="tweet1Head">
      <div class=tweet1Pic><img src="${data.user.avatars}"><span class="tweet1name">${data.user.name}</span></div>
      <div class="tweet1username">${data.user.handle}</div>
    </div>
    <br><br>
    <div class="tweettext">${data.content.text}</div>
    <hr class="hrt">
    <footer class="tweet1Footer">
      <time class="timeago" datetime="${data.created_at}" title="${data.created_at}">about 1 day ago</time>
      <div><i class="fas fa-flag tweet1Icon"></i><i class="fas fa-retweet tweet1Icon"></i><i class="fas fa-heart tweet1Icon"></i></div>
    </footer>
  </article>
  `
}
$loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
  .then(Tweets => {
    console.log('Success: ', Tweets);
    Tweets.forEach(item => {
      const $tweet = createTweetElement(item);
      $('.tweetsContainer').prepend($tweet);
    });
  }).catch(err => console.log(err));
}

$(document).ready(function(){
  $(".Errorbox").hide();
  $loadTweets();

  $(function() {
    // Listen to submit buttom:
    const $button = $('.title-text');
    $button.submit(function (event) {
      // Get the Text from Form into client.
      console.log('Submit clicked, performing ajax call...');
      const text = $(".title-text").serialize();
      event.preventDefault();
      if($('#counter').html() < 140) {
        // Submit the data to the server
        $.ajax('/tweets', { method: 'POST', data: text})
        .then(() => {
          console.log("The post was successful.");
          // Retrive completed new tweet from server
          $.ajax('/tweets', { method: 'GET' })
          .then(Tweets => {
            const $tweet = createTweetElement(Tweets[Tweets.length - 1]);
            $('.tweetsContainer').prepend($tweet);
          }).catch(err => console.log(err));
          $("#counter").html(140)
          $button.trigger("reset");
        }).catch(err => console.log(err));
      } else {
        $(".Errorbox").html("Please include your tweet text and press any key").show();
        setTimeout(() => $(".Errorbox").hide(), 5000);
      }
    });
  });
})