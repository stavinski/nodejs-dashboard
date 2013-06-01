var  request = require('request')
   , feedparser = require('feedparser');
   
exports.execute = function(req, res) {
    var opts = {
        url : 'https://mail.google.com/mail/feed/atom',
        headers : {
            'Authorization' : 'Basic XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        }
    };
    feedparser.parseStream(request(opts), function(error, meta, articles) {
        res.render('gmail', { metadata : meta, articles : articles });
    });
};
    
