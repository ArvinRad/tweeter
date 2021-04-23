/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
$(document).ready(function(){
  data.forEach(item => {
    const $tweet = createTweetElement(item);
    $('.tweetsContainer').append($tweet);
  });
})