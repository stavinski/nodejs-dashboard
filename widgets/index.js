/*
    GET a widget the name is used via the url 
    i.e. /widgets/{name}/
    
    The widget just needs to export an execute method that will accept the req & res
    objects
    
*/

var fs = require('fs')
  , path = require('path');

var findWidget = function(name, foundCallback) {
  var widgetPath = path.resolve(__dirname, name + '\\' + name + '.js');
  
  fs.exists(widgetPath, function (exists) {
        if (exists) {
            foundCallback(require(widgetPath), widgetPath);
        } else {
            console.info('failure to find widget for path [' + widgetPath + ']');
            res.status(404);
            res.end();
        }
    });
};    
    
exports.widget = function(req, res) {
  var name = req.params.name;
  findWidget(name, function foundCallback (widget, path) {
    if (widget.execute) {
        console.info('executing widget [' + path + ']');
        widget.execute(req, res);
    } else {
        console.info('widget [' + path + '] does not have an execute function');
        res.status(500);
        res.end();
    }
  });
};