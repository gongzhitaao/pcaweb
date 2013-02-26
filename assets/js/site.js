---
---
{% include setup %}

(function ($) {

    var menuidx = {
        '{{ BASE_PATH }}/': 1,
        '{{ BASE_PATH }}/courses/': 2,
        '{{ BASE_PATH }}/k12/': 3,
        '{{ BASE_PATH }}/help/': 4,
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        $('#mainnav li:nth-child(' + menuidx[path] + ')').addClass('active');

        $('#pagetab a:first').tab('show');
        $('#slider').nivoSlider();
    });

}(jQuery));
