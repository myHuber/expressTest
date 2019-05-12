var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mongooseTest', function (req, res, next) {
  mongoose.connect('mongodb://localhost/pets');
  mongoose.Promise = global.Promise;

  var Cat = mongoose.model('Cat1', {name: String});

  var tom = new Cat({name: 'Tom1'});
  tom.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('success insert');
    }
  });
  res.send('数据库连接测试');
});
module.exports = router;
