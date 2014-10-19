var tabs = require('sdk/tabs');
var tmr = require('sdk/timers');

tmr.setInterval(function() {
  if(tabs.length > 3){
    for(i in tabs){
      tabs[i].title = (tabs[i].index+1) + '.' + tabs[i].title;
      if(i > 6){
        break;
      } 
    }  
  }
  
}, 2000);