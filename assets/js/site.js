



(function ($) {

    var menuidx = {
        '/pcaweb/': 1,
        '/pcaweb/courses/': 2,
        '/pcaweb/k12/': 3,
        '/pcaweb/help/': 4,
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        $('#mainnav li:nth-child(' + menuidx[path] + ')').addClass('active');

        $('#pagetab a:first').tab('show');
        $('#slider').nivoSlider();
    });

}(jQuery));
