// Project Animations Module
export function initProjectAnimations() {
    // Initialize project cards with hidden state
    $('.project-card').css({
        'opacity': '0',
        'transform': 'translateY(30px)',
        'transition': 'all 0.6s ease'
    });
    
    // Project cards hover effect
    $('.project-card').hover(
        function() {
            $(this).find('.btn-custom').animate({
                opacity: 1
            }, 200);
        },
        function() {
            $(this).find('.btn-custom').animate({
                opacity: 0.9
            }, 200);
        }
    );
    
    // Fade in elements on scroll
    function fadeInOnScroll() {
        $('.project-card').each(function() {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            
            if(elementTop < viewportBottom - 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }
        });
    }
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    $(window).scroll(fadeInOnScroll);
    
    console.log('Project animations initialized');
}