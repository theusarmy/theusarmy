/* Copyright (c) 2017 Lin */

(function() {
  function underlineLinksPointingToThisPage() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].href;
      var location = '' + window.location;
      if (href === location || href === location + '#')  {
        link.style.textDecoration = 'underline';
      }
    }
  }
  
  underlineLinksPointingToThisPage();
  
  console.log('Finished polishing your page :D (script version 1.2)');
  console.log('%cHi there!\n%cYou should seriously join our clan. %c\nThere are web nerds like you in it! \n😉 🇺🇸 %cGo %cArmy!', 'font-size:50px;font-weight:bold;color:red', 'font-size:50px;font-weight:bold;color:blue;','font-size:50px;font-weight:bold;color:red', 'font-size:50px;font-weight:bold;color:blue', 'font-size:50px;font-weight:bold;color:red');
})();
