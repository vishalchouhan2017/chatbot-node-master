var TAG = 'chatBoot_Function.js';
var dbConfig = require('./../../Environment/mongoDatabase.js');
var inputConfig = require("../config/config.js");
var inputConstant = require("../config/constant.js");
var crypto = require('crypto');
;

exports.initBoot = function(req,callback){
    try{
       

    }catch(e){
        
    }
}

exports.chatBootQuestion = function(req,callback){
    try{
        var Client = require('node-rest-client').Client;
 
        var client = new Client();
 
        // direct way 
        client.get("http://18.218.118.104:8080/response?query=hello", function (data, response) {
            // parsed response body as js object 
            console.log(data);
            // raw response 
            console.log(response);
});

    }catch(e){
        
    }
}