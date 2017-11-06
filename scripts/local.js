var rand = function (length) {
  return Math.floor(Math.random() * length);
};
var queue = [];
var getQuotes = function () {
  $.getJSON("/json/quotes.json", function (json) {
    var quote = "";
    var author = "";
    var data = "";
    var quoteId = rand(json.length);

    console.log('in queue: ' + queue);
    if(queue[0]===quoteId) {
      if(quoteId===json.length-1) {
        quoteId--;
      } else {
        quoteId++;
      };      
    };

    json = json.filter(function (val) {
      return (val.id === quoteId);
    });
    json.forEach(function (val) {
      quote += val.quote
      author += val.author

    });
    $("#quote").text(quote);
    $("#author").text(author);
    queue.push(quoteId);
    console.log('pushed to queue: ' + quoteId);
    if (queue.length > 1) {
      queue.shift();
      console.log('shifted, last id is now: ' + queue[0]);      
    };
    console.log('queue: ' + queue + ' array length: ' + queue.length);
  });
}
$(document).ready(function () {
  getQuotes();
  $("#getQuote").on("click", function () {
    $("#getQuote").blur();
    getQuotes();
  });

  $("#b").on('click', function () {
    console.log('clicked share');
    $("#b").blur();

    window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + " by " + $("#author").text() + " " + "http://localhost:8080/");
  });
});

console.log("index.js end");
