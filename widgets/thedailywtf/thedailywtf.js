var   request = require('request')
    , feedparser = require('feedparser');

exports.execute = function (req, res) {
    feedparser.parseStream(request('http://syndication.thedailywtf.com/TheDailyWtf'), function(error, meta, articles) {
        res.render('thedailywtf', { articleCount : 3, articles : articles });
    });
};