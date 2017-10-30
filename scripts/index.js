var rand = function(length) {
  return Math.floor(Math.random() * length);
};

$(document).ready(function () {

  $("#getQuote").on("click", function () {
    $.getJSON("/json/quotes.json", function (json) {
      var htmlq = "";
      var res = rand(json.length);
      console.log(res);
      
      json = json.filter(function (val) {
        return (val.id === res);
      });
      json.forEach(function (val) {
        // html += "<div class = 'cat'>"
        htmlq += "<p>" + val.quote + "</p>"
        // html += "</div>"
      });
      $(".quote").html(htmlq);
      $(".author").html(html);

    });
  });
});


console.log("JavaScript is amazing!");
