// Requests JSON from Forismatic
$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
//   Adds quote to .quote div
  $(".quote").html('"' + json.quoteText + '"');   
//   Tests if quoteAuthor object is empty using .length. Creates status for use when twitter icon is clicked.
  if (json.quoteAuthor.length == 0) {
//     If empty use Anon as author
    $(".author").animate({opacity:0},500, function(){
      $(".author").html("- Anon"); }).animate({opacity:1},500);
    $("#tweet").attr("href", "https://twitter.com/home/?status=" + json.quoteText + ' (' + "Anon" + ')');
  }
  else {
//     Add author name to .author div
    $(".author").animate({opacity:0},500, function(){
      $(".author").html("- " + json.quoteAuthor); }).animate({opacity:1},500);
    $("#tweet").attr("href", "https://twitter.com/home/?status=" + json.quoteText + ' (' + json.quoteAuthor + ')');
  }  
});
// On click, make another request and update respective fields. Animations included for pizzaz.
$("#clicker").on("click", function(){ 
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
          $(".quote").animate({opacity:0},500, function(){
          $(".quote").html('"' + json.quoteText + '"'); }).animate({opacity:1},500);
          if (json.quoteAuthor.length == 0) {
            $(".author").animate({opacity:0},500, function(){
            $(".author").html("- Anon"); }).animate({opacity:1},500);
            $("#tweet").attr("href", "https://twitter.com/home/?status=" + json.quoteText + ' (' + "Anon" + ')');
          }
          else {
            $(".author").animate({opacity:0},500, function(){
            $(".author").html("- " + json.quoteAuthor); }).animate({opacity:1},500);
            $("#tweet").attr("href", "https://twitter.com/home/?status=" + json.quoteText + ' (' + json.quoteAuthor + ')');
          }          
        });
});
 