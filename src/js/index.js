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
    
    var _ = function(styles){
      
        /* If created a stylesheet */
        
        var style = document.getElementsByClassName('pudding')[0];
        
        if(style){
            return style.textContent = styles; 
        }
        
    }
    
    return {
            init: init,
            _ : _
    };
    
})();

module.exports = index;