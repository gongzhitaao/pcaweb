<<<<<<< HEAD
---
---
{% include setup %}
=======



>>>>>>> be9e069095b78068530c58fbd629eefdb09519ba

(function ($) {

    var o = {
        titleClass: 'ac-title',
        activeClass: 'ac-active',
        controlClass: 'ac-ctrl',
        expandedHTML: '&#9662;',
        collapsedHTML: '&#9656;'
    };

    $(document).ready(function() {

        // highlight main menu
        var path = window.location.pathname.replace(/@/g, 'a');
        var tmp = path.split('/');
<<<<<<< HEAD
        {% if BASE_PATH and BASE_PATH != '' %}
        var offset = 1;
        {% else %}
        var offset = 0;
        {% endif %}
=======
        
        var offset = 1;
        
>>>>>>> be9e069095b78068530c58fbd629eefdb09519ba
        $('#nav-' + tmp[1+offset]).addClass('active');

        var f = $("<span></span>", {'class': o.controlClass}).html(o.collapsedHTML);
        $('.' + o.titleClass).before(f);

        if (tmp[2+offset]) {
            $('#' + tmp[2+offset]).addClass('in')
                .prev().children('.' + o.controlClass).html(o.expandedHTML);
            $('#' + tmp[2+offset]).prev().children('.' + o.titleClass).css({opacity:1});
            $('#' + tmp[2+offset] + '-' + tmp[3+offset]).addClass(o.activeClass)
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
