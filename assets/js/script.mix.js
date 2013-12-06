//  ----------------------------------------------------------------------
//  =PLUGINS & LIBRARIES
//  ----------------------------------------------------------------------
@import 'lib/harvey.js';
@import 'lib/images-loaded-3.0.2.js';

@import 'plugin/throttle-1.1.jquery.min.js';




//  ----------------------------------------------------------------------
//  =MODERNIZR
//  ----------------------------------------------------------------------
Modernizr.load([
    {
        test     : Modernizr.input.placeholder,
        nope     : ['/assets/js/polyfill/placeholder-2.0.5.jquery.min.js'],
        callback : function() {
            $('input, textarea').placeholder();
        }
    },
    {
        test : Modernizr.touch,
        yep  : ['/assets/js/touch.min.js']
    }
]);




//  ----------------------------------------------------------------------
//  =VARS
//  ----------------------------------------------------------------------
var $win = $(window),
    $body = $('body'),
    $header = $('#header'),
    full          = 1280,
    lt_full       = full - 1,
    desktop       = 960,
    gt_desktop    = desktop + 1,
    lt_desktop    = desktop - 1,
    tablet        = 768,
    gt_tablet     = tablet + 1,
    lt_tablet     = tablet - 1,
    mobile        = 568,
    gt_mobile     = mobile + 1,
    lt_mobile     = mobile - 1,
    mobile_sm     = 320;




//  ----------------------------------------------------------------------
//  =SCROLL
//  ----------------------------------------------------------------------
var t;

window.addEventListener('scroll', function() {
  clearTimeout(t);

  if (!body.classList.contains('disable-hover')) body.classList.add('disable-hover')

  t = setTimeout(function(){
    body.classList.remove('disable-hover')
  }, 125);
}, false);