/*
 * @Description  : write something
 * @Autor        : snoop
 * @Date         : 2022-06-10 15:07:48
 * @LastEditors  : snoop
 * @LastEditTime : 2022-06-10 15:39:41
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
