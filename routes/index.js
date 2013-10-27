
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'peianwu.com | welcome!' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'peianwu.com | about me'});
};

// project pages

exports.math = function(req, res) {
  res.render('math', { title: 'peianwu.com | project | math problem generator'});
};