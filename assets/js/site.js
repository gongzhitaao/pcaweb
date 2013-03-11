---
---
{% include setup %}

(function ($) {

    var menuidx = {
        '{{ BASE_PATH }}/': 1,
        '{{ BASE_PATH }}/courses': 2,
        '{{ BASE_PATH }}/k12': 3,
        '{{ BASE_PATH }}/help': 4,
    };

    var o = {
        titleClass: 'ac-title',
        controlClass: 'ac-ctrl',
        expandHtml: '&#9662;',
        collapsedHtml: '&#9656;'
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        var tmp = path.split('/');
        $('#mainnav li:nth-child(' + menuidx['{{ BASE_PATH }}/' + tmp[1]] + ')').addClass('active');

        var f = $("<span></span>", {'class': o.controlClass}).html(o.collapsedHtml)
        $('.' + o.titleClass).before(f);

        if (tmp[2]) $('#' + tmp[2]).addClass('in');

        $('.collapse')
            .on('hide', function() {

            })
            .on('show', function() {

            });
        ;


    });

}(jQuery));
