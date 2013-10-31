// db login info

exports.access = function(hostName) {
  var info = {
      mongolab: 'mongodb://peianwu:W4nn4b3384@ds053168.mongolab.com:53168/pwdb'
    };

  return info[hostName];
};