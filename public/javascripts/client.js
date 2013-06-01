
(function ($) {
    
    var resetWidget = function (widget) {
        widget.html($('<div></div>')
                        .addClass('widget-head')
                        .append($('<h3>Loading Content</h3>')
                                        .append('<img src="images/ajax-loader.gif" />'))
                        .after($('<div></div>')
                                .addClass('widget-content')
                                .html('<p>loading content...</p>')));
    };
    
    var loadWidget = function(widget) {
        var id = widget.attr('id');
        
        $.get('widgets/' + id)
            .done(function(data) {
                widget.html(data);
                widget.on('click', 'a', function (event) {
                    resetWidget(widget);
                    loadWidget(widget);
                });
            })
            .fail(function () {
                widget.html(failHtml)
            });
    };
    
    var loadWidgets = function() {
        var failHtml = $('<div></div>')
                        .addClass('widget-head')
                        .html('Failed to load content')
                        .after($('<div></div>')
                                .addClass('widget-content')
                                .html('Oh noes could not load content!'));
            
        $('.widget').each(function () {
            loadWidget($(this));
        });
    };
        
    var activateTabs = function() {
        $('#tabs').tabs();
    };
    
    $(function() {
        loadWidgets();
        activateTabs();
    });

})(jQuery);