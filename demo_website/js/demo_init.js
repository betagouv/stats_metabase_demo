/*
 * Exemple d'initialisation et d'utilisation du tracker javascript
 */
document.addEventListener('DOMContentLoaded', function() {
    // Option : use window.location.href to include domain
    // location.hash and location.search are other interesting data points
    track(window.location.pathname, Steps.LOAD);
}, false);

document.addEventListener('scroll', function() {
    track(window.location.pathname, Steps.SCROLL);
}, false);

document.addEventListener('click', function() {
    track(window.location.pathname, Steps.CLICK);
}, false);
