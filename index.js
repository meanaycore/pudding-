/*
    Introduction info
*/

var index = (function(){
    'use strict';

    /*
        init function
    */

    var index = 0;
    var path = '';

    var init = function()
    {
          /* create a stylesheet If none exist */

            var stylesheet = document.createElement('style');
            var head = document.head || document.getElementsByTagName('head')[0];
            stylesheet.className = 'pudding';
            head.appendChild(stylesheet);

        /* grab existing stylesheets */

        var styleList = document.styleSheets || [];

        return this;

    }

    /* single element style */

    var css = function(styles){

        /* If created a stylesheet */

        var style = document.getElementsByClassName('pudding')[0];

        if(style){
            return style.textContent = styles;
        }
        return console.log('Error: Style element not found, refresh page !');

    }

    return {
             css  : css,
             init : init
    };

})();

module.exports = index;
