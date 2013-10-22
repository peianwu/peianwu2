(function() {

  window.onload = function() {
    $(".wrapper").css("height", window.innerHeight);
    $("footer").css("width", $(".wrapper").width());
  };

  $(window).resize( function() {
    $(".wrapper").css("height", window.innerHeight);
    $("footer").css("width", $(".wrapper").width());
  });

})();