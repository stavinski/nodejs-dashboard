var  feedparser = require('feedparser')
   , request = require('request');

exports.execute = function(req, res) {
    feedparser.parseStream(request('http://feeds.bbci.co.uk/sport/0/formula1/rss.xml'), function(error, meta, articles) {
            res.render('f1', { articleCount : 3, articles : articles });
    });
};