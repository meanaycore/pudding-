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
    
    var init = function(createFile, preferedFile) 
    {
        preferedFile = preferedFile || null;
        createFile = createFile || false;
      
        if(!preferedFile && !createFile){
            console.log('USAGE: pass in a filename or just true if you want to create one');
            return;
        }
        
          /* create a stylesheet If none exist */
         console.log('OUTI');
        console.log(createFile);
        if(createFile){
            console.log('INNIE');
            var stylesheet = document.createElement('style');
            var head = document.head || document.getElementsByTagName('head')[0];
            stylesheet.className = 'pudding';
            head.appendChild(stylesheet);
            return this;
        }
        
        /* grab existing stylesheets */
        var preferedFile = preferedFile + '.css'; 
        var fileNames = [];
        var styleList = document.styleSheets || [];
        
        /* grab css file path */
        
          path = styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .replace(styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .substring(styleList[0]['ownerNode']['attributes'][0]['nodeValue']
                    .lastIndexOf('/') + 1), '');
        
        /* return a list of filenames */
        
         if(styleList) {
            for(var i=0; i < styleList.length; i++) {
                fileNames.push(styleList[i]
                               .href.substr(styleList[i]
                                .href.lastIndexOf('/') + 1));
            }
         }
        
        /* search for prefered file and return index */
        
         if(styleList) {
            for(var i=0; i < styleList.length; i++) {
                var haystack = styleList[i]
                    .href.substr(styleList[i]
                                .href.lastIndexOf('/') + 1);
                if(preferedFile == haystack){
                    index = i;
                }
            }
         }
        
        return this;
        
    }
    
    /* single element style */
    
    var _ = function(styles){
       
        /* validate JSON*/
        
        var style = document.getElementsByClassName('pudding')[0];
        
        if(style){
            return style.textContent = styles; 
        }
        
        /* multiple or single styles */
     
        document.styleSheets[index].insertRule(styles);
    }
    
    return {
            init: init,
            _ : _
    };
    
})();

module.exports = index;