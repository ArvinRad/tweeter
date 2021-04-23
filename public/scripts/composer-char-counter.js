// Count the characters and show its the remaining

$(document).ready(function() {
  console.log("Document is ready.");
  let count = 0;
  $("#tweet-text").on('keydown', function(event) {
    if(event.key) {
      if (event.key === "Backspace") count--;
      else count++;
      $("#counter").html(140 - count)
      if (count > 140) $('#counter').css('color', 'red')
      else $('#counter').css('color', '#545149');
    }
  });
  // const list = document.querySelectorAll("div.tweettime");
  // console.log(list);
  // for (item of list) {
  //   const date = $(`${item}`).html();
  //   const result = $(`${item}`).html($.timeago(new Date(date)));
  //   console.log(item, date, result)
  // }
});
