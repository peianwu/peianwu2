
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'peianwu.com | welcome!' });
};

exports.about = function(req, res) {
  res.render('about', { title : 'peianwu.com | about me'});
};