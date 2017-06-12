/* Copyright (c) 2017 Lin */
(function() {
  function Starchart(rawText) {
    this.decode(rawText);
  }
  
  Starchart.prototype.decode = function(rawText) {
    var lines = rawText.split('\n');
    var nonBlankLines = lines.filter(function(line) {
      return line.length > 0;
    });
    
    this.people = nonBlankLines.map(function(line) {
      var parts = line.split(' ');
      var name = parts[0];
      var stars = ~~parts[1];
      return new Person(name, stars);
    });
  };
  
  function Person(name, stars) {
    this.name = name;
    this.stars = stars;
  }
  
  Person.prototype.createRow = function() {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var starCell = document.createElement('td');
    
    nameCell.innerHTML = this.name;
    starCell.innerHTML = this.stars;
    
    row.appendChild(nameCell);
    row.appendChild(starCell);
    
    return row;
  };
  
  function fetchStarchartAndUpdateTable(table, starchartURL) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', starchartURL);
    
    xhr.addEventListener('readystatechange', function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var starchart = new Starchart(xhr.responseText);
        
        for (var i = 0; i < starchart.people.length; i++) {
          var row = starchart.people[i].createRow();
          table.appendChild(row);
        }
      }
    });
    
    xhr.send();
  }
  
  fetchStarchartAndUpdateTAble(document.querySelector('table.bordered-table'), '/theusarmy.github.io/data/starchart.txt/');
})();
