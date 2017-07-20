var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.route('/products')
.get(function (req,res) {
  var options = {
    method: 'GET',
    url: `https://testapi.pfl.com/products?apikey=${process.env.apikey}`,
    headers: {
      Authorization: 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM='
    }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    res.json(JSON.parse(body))
  })
})
router.route('/products/:productId')
.get(function (req,res) {
  var options = {
    method: 'GET',
    url: `https://testapi.pfl.com/products?apikey=${process.env.apikey}&productID=${req.params.productId}`,
    headers: {
      Authorization: 'Basic bWluaXByb2plY3Q6UHIhbnQxMjM='
    }
  };
  request(options, function (error, response, body) {
    if (error) throw new Error(error)
    res.json(JSON.parse(body))
  })
})


module.exports = router;
