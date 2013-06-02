var  request = require('request')
   , credentials = require('../../credentialStore')
   , feedparser = require('feedparser');
   
exports.execute = function(req, res) {
    
    credentials.getCredentials('gmail', function (err, credentials) {
        if (err) {
            throw err;
        }
    
        var encodedAuth = new Buffer(credentials.username + ':' + credentials.password).toString('base64');
        
        var opts = {
            url : 'https://mail.google.com/mail/feed/atom',
            headers : {
                'Authorization' : 'Basic ' + encodedAuth
            }
        };
        feedparser.parseStream(request(opts), function(error, meta, articles) {
            res.render('gmail', { metadata : meta, articles : articles });
        });
    });
    
};
    
