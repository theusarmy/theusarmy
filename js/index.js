/* Copyright (c) 2017 Lin */

(function() {
  function underlineLinksPointingToThisPage() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.href.slice(0, ('' + window.location).length) === ('' + window.location))  {
        link.style.textDecoration = 'underline';
      }
    }
  }
  
  underlineLinksPointingToThisPage();
  
  console.log('Finished polishing your page :D (script version 1.1)');
})();
