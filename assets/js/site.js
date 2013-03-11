



(function ($) {

    var menuidx = {
        '': 1,
        'courses': 2,
        'k12': 3,
        'help': 4,
    };

    var navidx = {
        'syllabus': 1,
        'schedule': 2,
    };

    var o = {
        titleClass: 'ac-title',
        controlClass: 'ac-ctrl',
        expandedHTML: '&#9662;',
        collapsedHTML: '&#9656;'
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        var tmp = path.split('/');
        
        var offset = 1;
        
        $('#mainnav li:nth-child(' + menuidx[tmp[1+offset]] + ')').addClass('active');

        var f = $("<span></span>", {'class': o.controlClass}).html(o.collapsedHTML);
        $('.' + o.titleClass).before(f);

        if (tmp[2+offset]) {
            $('#' + tmp[2+offset]).addClass('in');
        }

        $('.collapse')
            .on('hide', function() {
                $(this).prev().children('.' + o.controlClass).html(o.collapsedHTML);
            })
            .on('show', function() {
                $(this).prev().children('.' + o.controlClass).html(o.expandedHTML);
            });
        ;
    });

}(jQuery));
