// Main JavaScript File - Entry Point
import { initSmoothScroll } from './smoothScroll.js';
import { initNavbarEffects } from './navbarEffects.js';
import { initProjectAnimations } from './projectAnimations.js';

$(document).ready(function() {
    // Initialize all modules
    initSmoothScroll();
    initNavbarEffects();
    initProjectAnimations();
    
    console.log('Portfolio website loaded successfully!');
});