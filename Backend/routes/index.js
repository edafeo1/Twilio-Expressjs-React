var express = require('express');
var twilio = require('../Twilio');
var router = express.Router();
//var client = twilio.client;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', async function(req, res, next) {
  console.log('Logging in');
  const data = await twilio.sendVerifyAsync('+61492152527', 'sms');
  console.log(data);
  res.send(data);

});

router.get('/verify', function(req, res, next) {
  console.log('Verifying');
  const data = await twilio.VerifyAsync('+61492152527', req.query.code);
  console.log(data);
  return data;
});
/*
app.get('/test', (req, res) => {
  res.send('welcome to twilio fego')
});
*/
module.exports = router;
