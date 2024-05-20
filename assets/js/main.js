(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');
        
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Scrolly.
        $('.scrolly').scrolly();

        // Portfolio.
        $('.portfolio').each(function() {

            var $portfolio = $(this),
                $content = $portfolio.find('.content');

            // Poptrox.
            $content.poptrox({
                usePopupCaption: true
            });

            // Tabs.
            $portfolio.each(function() {

                var $this = $(this),
                    $tabs = $this.find('.tabs a'),
                    $media = $this.find('.media');

                $tabs.on('click', function(e) {

                    var $this = $(this),
                        tag = $this.data('tag');

                    // Prevent default.
                    e.preventDefault();

                    // Remove active class from all tabs.
                    $tabs.removeClass('active');

                    // Reapply active class to current tab.
                    $this.addClass('active');

                    // Hide all media elements first.
                    $media.hide();

                    // If 'all' is selected, show all media elements.
                    if (tag === 'all') {
                        $media.fadeIn('fast');
                    } else {
                        // Otherwise, show only the media elements with the corresponding class.
                        $media.filter('.' + tag).fadeIn('fast');
                    }

                });

            });

        });

    });

})(jQuery);


