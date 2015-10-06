var tabs = require('sdk/tabs');
var windows = require("sdk/windows").browserWindows;
var tmr = require('sdk/timers');
var prefix, title;

tmr.setInterval(function() {
    for (let window of windows) {
        // console.log(window.title);
        if(window.tabs.length > 3){
            for(i in window.tabs){
                console.log(i + ' ' + window.tabs[i].title);
                prefix = '[' + (window.tabs[i].index+1) + ']';
                title = window.tabs[i].title.replace(/\[.\]/, '');

                if(i < 8){
                    window.tabs[i].title = prefix + title;
                }else if(i == 8){
                    window.tabs[i].title = '[9]' + title;
                }else{
                    window.tabs[i].title = title;
                }
            }  
        }   
    }
}, 2000);