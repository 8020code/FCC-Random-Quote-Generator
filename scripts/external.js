var getQuotes = function () {
  $.ajax({
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function (data) {
      var post = data.shift(); // The data is an array of posts. Grab the first one.
      $('#author').text(post.title);
      $('#quote').html(post.content);

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $('#author').text('Source:' + post.custom_meta.Source);
      } else {
        $('#quote').html(post.content);
      }
    },
    cache: true
  });

}
$(document).ready(function () {
  getQuotes();

});

$("#getQuote").on("click", function () {
  $("#getQuote").blur();
  getQuotes();
});

$("#b").on('click', function () {
  $("#b").blur();
  window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " by " + $("#author").text());
});

