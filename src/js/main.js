import App from './app.js';

const app = new App();

// jqurey

const $ = require( "jquery" )( window );

// Vendor Apllication Loader

// import slick from './vendor/slick.js';

// import Tween from './vendor/TweenMax.min.js';

// import Vendor Apps Scripts

// import vendorApp from './vendor/vendor.js';



var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault();

});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    e.preventDefault();
});
