
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'peianwu.com' });
};

exports.about = function(req, res) {
  res.render('about');
};

// project pages

exports.math = function(req, res) {
  res.render('math');
};