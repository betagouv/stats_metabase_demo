/*
 * Exemple d'initialisation et d'utilisation du tracker javascript
 */
document.addEventListener('DOMContentLoaded', function() {
    track(window.location.href, Steps.LOAD)
}, false);

document.addEventListener('DOMContentLoaded', function() {
    track(window.location.href, Steps.SCROLL)
}, false);

document.addEventListener('DOMContentLoaded', function() {
    track(window.location.href, Steps.CLICK)
}, false);
