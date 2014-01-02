/**
 * equalize.js
 * Author & copyright (c) 2012: Tim Svensen
 * Dual MIT & GPL license
 *
 * Page: http://tsvensen.github.com/equalize.js
 * Repo: https://github.com/tsvensen/equalize.js/
 */

;(function($) {

  $.fn.equalize = function(options) {
    var $containers = this, // this is the jQuery object
        children    = false,
        reset       = false,
        equalize,
        type;

    // when options are an object
    if ($.isPlainObject(options)) {
      equalize = options.equalize || 'height';
      children = options.children || false;
      reset    = options.reset || false;
    } else { // otherwise, a string was passed in or default to height
      equalize = options || 'height';
    }

    if (!$.isFunction($.fn[equalize])) { return false; }

    // determine if the height or width is being equalized
    type = (equalize.indexOf('eight') > 0) ? 'height' : 'width';

    return $containers.each(function() {

      var $container = $(this);

      if ($container.is(':hidden')) {
        // $container.css({ 'position':'absolute', 'visibility': 'hidden', 'display': 'block' });
        $container.addClass('eq-hidden');
      }

      // when children exist, equalize the passed in child elements, otherwise equalize the children
      var $children = (children) ? $container.find(children) : $container.children(),
          max = 0; // reset for each container

      $children.each(function() {
        var $element = $(this),
            value;

        if (reset) { $element.css(type, ''); } // remove existing height/width dimension
        value = $element[equalize]();          // call height(), outerHeight(), etc.
        if (value > max) { max = value; }      // update max
      });

      // $container.removeAttr('style');
      $container.removeClass('eq-hidden');
      $children.css(type, max +'px'); // add CSS to children
    });
  };

}(jQuery));