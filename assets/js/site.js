---
---
{% include setup %}

(function ($) {

    var menuidx = {
        '{{ BASE_PATH }}/': 1,
        '{{ BASE_PATH }}/comp1000/': 2,
        '{{ BASE_PATH }}/comp1003/': 3,
        '{{ BASE_PATH }}/comptest/': 4,
        '{{ BASE_PATH }}/itminor/': 5,
        '{{ BASE_PATH }}/k12/': 6
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        $('#mainnav li:nth-child(' + menuidx[path] + ')').addClass('active');

        $('#pagetab a:first').tab('show');
        $('#slider').nivoSlider();
    });

}(jQuery));
