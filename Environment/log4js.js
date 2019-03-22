var TAG = 'log4js.js';
var log4js = require('log4js');
var env = require('./env.js').env;
var fs = require('fs');
var os = require('os');

var folderSuffix = os.hostname() + '-' + process.env.NODE_APP_INSTANCE;

var logger_dragon;

var log4jsEnv = {
		"prd":
		{
			"logDir": "./NodeJslogs",
			"logLevel" : "INFO",
			"maxLogSize": 10048576, //10MB
      	  	"backups": 10
		},

		"stg":
		{
			"logDir": "./NodeJslogs",
			"logLevel" : "DEBUG",
			"maxLogSize": 10048576,
      	  	"backups": 5
		},
		"dev":
		{
			"logDir": "./NodeJslogs",
			"logLevel" : "DEBUG",
			"maxLogSize": 10048576,
      	  	"backups": 3
		}
};


var log4jsEnvParams = null;
if (env === 'prd') {
	log4jsEnvParams = log4jsEnv.prd;
} else if ( env === 'stg') {
	log4jsEnvParams = log4jsEnv.stg;
}  else {
	log4jsEnvParams = log4jsEnv.dev;
}

var logDir = log4jsEnvParams.logDir ;

var maxLogSize = log4jsEnvParams.maxLogSize;

var backups = log4jsEnvParams.backups;

var logLevel = log4jsEnvParams.logLevel;

var log4jsConfig = {

	"appenders": [
		{
			"type": "file",
			"filename": logDir + "/" + "ai.log",
			"maxLogSize": maxLogSize,
			"backups": backups,
		}
	]
};

function createLogDir (callback) {
	fs.exists(logDir, function(exists) {
		if (!(exists)) {
			fs.mkdir(logDir, function(err) {
				if (err) {
					console.log("Log Directory Cannot be Created: " + logDir + "." +err);
					throw new Error();
				} else {
					callback(true, "Log Directory created: " + logDir);
				}
			});
		} else {
			callback(true, "Log Directory Exists: " + logDir);
		}
	});
}




createLogDir(function(success,result) {

	if (success) {
		log4js.configure(log4jsConfig,{});

		logger_ai = log4js.getLogger("ai");
		logger_ai.setLevel(logLevel);
		exports.logger_ai = logger_ai;

    }
});

