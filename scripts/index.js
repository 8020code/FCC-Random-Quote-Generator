var rand = function (length) {
  return Math.floor(Math.random() * length);
};


$(document).ready(function () {

  // $("#quote").html("<div>Welcome to the Random Quote Generator</div>");
  // $("#author").html("<div>We hope you will like it</div>");

  $("#getQuote").on("click", function () {
    $.getJSON("/json/quotes.json", function (json) {
      var htmlq = "";
      var htmla = "";
      var data = "";
      var res = rand(json.length);
      console.log(res);

      json = json.filter(function (val) {
        return (val.id === res);
      });
      json.forEach(function (val) {
        htmlq += "<div>" + val.quote + "</div>"
        htmla += "<div>" + val.author + "</div>"

        data += "<a href=" + '"https://twitter.com/share?ref_src=twsrc%5Etfw"' + "class="+ '"twitter-share-button"' +  "data-text=" + '"' + val.quote + " by " + val.author + '"' + "data-show-count=" + '"false"'+ "> Tweet</a >"
        data += "<script async src=" + '"' + "https://platform.twitter.com/widgets.js" + '"' + "charset=" + '"' + "utf-8" + '"' + "></script>"
      });
      alert(data);
      $("#quote").html(htmlq);
      $("#author").html(htmla);
      $("#tweet").html(data);

    });
  });
});


console.log("index.js end");
