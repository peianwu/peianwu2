
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'peianwu.com' });
};

exports.survey = function(req, res) {
  res.render('survey');
};

exports.about = function(req, res) {
  res.render('about');
};