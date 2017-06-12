/* Copyright (c) 2017 Lin */

(function() {
  function underlineLinksPointingToThisPage() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.href === ('' + window.location) || link.href === '#' || link.href === '/')  {
        link.style.textDecoration = 'underline';
      }
    }
  }
  
  underlineLinksPointingToThisPage();
  
  console.log('Finished polishing your page :D');
})();
