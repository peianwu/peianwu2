// detect jquery source availability
// if google hosting not available revert to local

if (!window.jQuery) {
  document.write('<script src="/javascripts/lib/jquery-1.10.2.min.js"></script>');
}

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