//  ----------------------------------------------------------------------
//  =VENDOR
//  ----------------------------------------------------------------------

@import 'vendor/images-loaded.js';
@import 'vendor/throttle.jquery.js';
@import 'vendor/harvey.js';
@import 'vendor/equalize-custom.jquery.js';





//  ----------------------------------------------------------------------
//  =MODERNIZR
//  ----------------------------------------------------------------------

Modernizr.load([
  {
    test     : Modernizr.input.placeholder,
    nope     : ['/assets/js/polyfill/placeholder.jquery.min.js'],
    callback : function() {
      $('input, textarea').placeholder();
    }
  }
]);




//  ----------------------------------------------------------------------
//  =VARS
//  ----------------------------------------------------------------------

var $win = $(window)
  , $body = $('body')
  , full          = 1280
  , lt_full       = full - 1
  , desktop       = 960
  , gt_desktop    = desktop + 1
  , lt_desktop    = desktop - 1
  , tablet        = 768
  , gt_tablet     = tablet + 1
  , lt_tablet     = tablet - 1
  , mobile        = 568
  , gt_mobile     = mobile + 1
  , lt_mobile     = mobile - 1
  , mobile_sm     = 320;




//  ----------------------------------------------------------------------
//  =EQUALIZE
//  ----------------------------------------------------------------------

$win.on('resize', $.debounce(100, function() {
  if (typeof equalize === 'function') equalize();
})).resize();




//  ----------------------------------------------------------------------
//  =ANALYTICS
//  ----------------------------------------------------------------------

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
// ga('create', 'UA-XXXXX-Y');
// ga('send', 'pageview');