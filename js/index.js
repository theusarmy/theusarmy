/* Copyright (c) 2017 Lin */

(function() {
  function emboldenAndUnunderlineLinksPointingToThisPage() {
    var links = document.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.href;
      var location = '' + window.location;
      if (href === location || href === location + '#')  {
        link.style.fontWeight = 'bold';
        link.style.textDecoration = 'none';
      }
    }
  }
  
  emboldenAndUnunderlineLinksPointingToThisPage();
  
  console.log('Finished polishing your page :D (script version 1.7)');
  console.log('%cHi there!\n%cYou should seriously join our clan. %c\nThere are web nerds like you in it! \n😉 🇺🇸 %cGo %cArmy!', 'font-size:50px;font-weight:bold;color:red', 'font-size:50px;font-weight:bold;color:blue;','font-size:50px;font-weight:bold;color:red', 'font-size:50px;font-weight:bold;color:blue', 'font-size:50px;font-weight:bold;color:red');
})();
