
/*
 * GET about me page.
 */

exports.about = function(req, res) {
  res.render('about', { title : 'peianwu.com | about me'});
};