$(function() {
  $("html, body").stop().animate({"scrollTop": 0}, 1000, "swing");
  
  size_li = $(".myList li").size();
  x = 1;
  $(".myList li:lt(" + x + ")").show();

  $(".loadMore").on("click", function() {
    x = (x+1 <= size_li) ? x+1 : size_li;
    $(".myList li:lt(" + x + ")").show();
  });
});