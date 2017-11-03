var rand = function (length) {
  return Math.floor(Math.random() * length);
};

var getQuotes = function() {
  $.getJSON("/json/quotes.json", function (json) {
    var quote = "";
    var author = "";
    var data = "";
    var res = rand(json.length);

    json = json.filter(function (val) {
      return (val.id === res);
    });
    json.forEach(function (val) {
      quote += val.quote
      author += val.author

    });


    $("#quote").text(quote);
    $("#author").text(author);

  });
}
$(document).ready(function () {
  getQuotes();
  $("#getQuote").on("click", function () {
    $("#getQuote").blur();
    getQuotes();    
  });

  $("#b").on('click', function () {
    console.log('clicked');
    $("#b").blur();

    window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " by " + $("#author").text() + " " + "http://localhost:8080/");
  });
});

console.log("index.js end");
