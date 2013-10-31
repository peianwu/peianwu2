
/*
 * GET home page.
 */

exports.index = function(db) {
  return function(req, res){

    var collection = db.get('blog');
    collection.find({}, function(e, docs) {
      res.render('index', { title: 'peianwu.com | welcome!', posts: docs });
    });
  };
};

exports.about = function(req, res) {
  res.render('about', { title : 'peianwu.com | about me'});
};