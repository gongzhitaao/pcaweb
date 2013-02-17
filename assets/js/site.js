
(function ($) {

    var menuidx = {
        '': 1,
        'comp1000': 2,
        'comp1003': 3,
        'comptest': 4,
        'itminor': 5,
        'k12': 6
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname.split('/')[1];
        $('#mainnav li:nth-child(' + menuidx[path] + ')').addClass('active');

        $('#pagetab a:first').tab('show');
        $('#slider').nivoSlider();
    });

}(jQuery));
