var   request = require('request')
    , feedparser = require('feedparser');

exports.execute = function (req, res) {
    request('http://xkcd.com/rss.xml')
            .pipe(new feedparser())
            .on('error', function (error) {
                res.end('err');
            })
            .on('article', function (article) {
                res.render('xkcd', article);
                res.end();
            })
            .on('end', function () {
                res.end('end');
            });
};