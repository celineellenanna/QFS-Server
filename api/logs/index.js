var fs = require('fs');

var infoLog = './api/logs/' + process.srv.env + '_info.txt';
var errorLog = './api/logs/' + process.srv.env + '_error.txt';

var Log = {
    info: function(info) {
        var timestamp = new Date();
        var text = timestamp + ' | ' + info + '\n';
        fs.appendFile(infoLog, text, function() {
            console.log(text);
        });
    },
    error: function(error) {
        var timestamp = new Date();
        var text = timestamp + ' | ' + error + '\n';
        fs.appendFile(errorLog, text, function() {
            console.error(text);
        });
    }
}

module.exports = Log;