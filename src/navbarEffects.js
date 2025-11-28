// Navbar Effects Module
export function initNavbarEffects() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.navbar').css('box-shadow', '0 5px 20px rgba(0, 217, 255, 0.1)');
        } else {
            $('.navbar').css('box-shadow', 'none');
        }
    });
    
    console.log('Navbar effects initialized');
}