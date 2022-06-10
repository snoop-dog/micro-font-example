/*
 * @Description  : write something
 * @Autor        : snoop
 * @Date         : 2022-06-10 15:07:48
 * @LastEditors  : snoop
 * @LastEditTime : 2022-06-10 15:20:05
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
