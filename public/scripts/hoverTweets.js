$(document).ready(function() {
  $("article.tweet1").hover(
    () => {
      $(this).find("article.tweet1").css('box-shadow', '2em 0 4em olive;');
      console.log("entered:", this);
    }, () => {
      $(this).last().remove();
      console.log("exited:", this);
    }
  );
});