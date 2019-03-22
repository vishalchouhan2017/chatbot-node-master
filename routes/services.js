var TAG = 'chatboot.js';

var express = require('express');
var app = express();
var customerFunc = require("./functionality/customerfunction.js");
var chatbootFunc = require("./functionality/chatBootFunction.js");


// ******************** FOR API CALLS FROM WEB/MOBILE ***********************


// ******************** CUSTOMER API ***********************
app.post('/api/v1.0/init', function (req, res) {
	var callback = function (err, regres) {
		res.statusCode = regres.http_code;
		res.json(regres);
	};
	customerFunc.initialize(req, callback);
});


app.post('/api/v1.0/customerRegistration', function (req, res) {
	var callback = function (err, regres) {
		res.statusCode = regres.http_code;
		res.json(regres);
	};
	customerFunc.customerRegistration(req, callback);
});

app.post('/api/v1.0/viewCustomer', function (req, res) {
    var callback = function (err, regres) {
      res.statusCode = regres.http_code;
      res.json(regres);
  };
  customerFunc.viewCustomer(req, callback);
});

app.post('/api/v1.0/removeCustomer', function (req, res) {
    var callback = function (err, regres) {
      res.statusCode = regres.http_code;
      res.json(regres);
  };
  customerFunc.removeCustomer(req, callback);
});

app.post('/api/v1.0/updateCustomer', function (req, res) {
    var callback = function (err, regres) {
      res.statusCode = regres.http_code;
      res.json(regres);
  };
  customerFunc.updateCustomer(req, callback);
});

// ******************** CHATBOOT API ***********************

app.post('/api/v1.0/initBoot', function (req, res) {
 
    var callback = function (err, regres) {
      res.statusCode = regres.http_code;
      res.json(regres);
    };
    chatbootFunc.initBoot(req, callback);
 
});

app.post('/api/v1.0/chatBootQuestion', function (req, res) {
  var callback = function (err, regres) {
    res.statusCode = regres.http_code;
    res.json(regres);
};
chatbootFunc.chatBootQuestion(req, callback);
});

module.exports = app;
