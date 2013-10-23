// detect jquery source availability
// if google hosting not available revert to local
if (!window.jQuery) {
  document.write('<script src="/javascripts/lib/jquery-1.10.2.min.js"></script>');
}

// anonymous load
(function() {

  // adjust page height on load/resize
  
  // $(window).on("load resize", function() {
  //   $(".wrapper").css("height", window.innerHeight - $("header").height());
  //   $("footer").css("width", $(".wrapper").width());
  // });

})();