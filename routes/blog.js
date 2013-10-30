
/*
 * GET blog page.
 */

exports.newpost = function(req, res) {
  res.render('newpost', { title : 'peianwu.com | blog | new post' });
};

exports.blog = function(db) {
  return function(req, res) {
    var collection = db.get('blog');
    // console.log(collection);
    collection.find({}, {}, function(e, docs) {
      
      res.render('blog', { title : 'peianwu.com | blog' , posts : docs });
    });
  };
};

// basic blog logic
exports.addpost = function(db) {
  return function(req, res) {
    // month name
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // find form values
    var blogSubject = req.body.postsubject,
        blogEntry = req.body.postentry;

        // add 8 hours for Taipei time
    var dt = (function(hours) {
          var now = new Date();
          now.setHours(now.getHours() + hours);
          return now;
        })(8);

     var formatDatetime = monthName[dt.getMonth()] + ' ' + dt.getDate() + ', ' +
          dt.getFullYear() + ' ' + dt.getHours() + ':' + ('0' + dt.getMinutes()).slice(-2);

    var collection = db.get('blog');

    collection.insert({
      "subject" : blogSubject,
      "entry" : blogEntry,
      "datetime" : dt,
      "formatDatetime" : formatDatetime
    }, function(err, doc) {
      if (err) {
        res.send("Error: Oh, oh! Can't add to database.");
      } else {
        res.redirect('/blog');
        res.location('/blog');
      }
    });
  };
};