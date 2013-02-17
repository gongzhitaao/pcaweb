
(function ($) {

    var menuidx = {
        '/pcaweb/': 1,
        '/pcaweb/comp1000/': 2,
        '/pcaweb/comp1003/': 3,
        '/pcaweb/comptest/': 4,
        '/pcaweb/itminor/': 5,
        '/pcaweb/k12/': 6
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname;
        $('#mainnav li:nth-child(' + menuidx[path] + ')').addClass('active');

        $('#pagetab a:first').tab('show');
        $('#slider').nivoSlider();
    });

}(jQuery));
