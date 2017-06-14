/* Copyright (c) 2017 Lin */
(function() {
  var currentStarchart;
  var starData = document.querySelector('#stars');
  var calculateBtn = document.querySelector('.calculate-button');
  var output = document.querySelector('#new-stars');
  
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
      var stars = ~~parts.pop();
      var name = parts.join(' ');
      return new Person(name, stars);
    }).sort(function(person1, person2) {
      return person1.name.toLowerCase().charCodeAt(0) - person2.name.toLowerCase().charCodeAt(0);
    });
  };
  
  Starchart.prototype.plus = function(otherStarchart) {
    var newChart = new Starchart(this.toString());
    
    for (var i = 0; i < otherStarchart.people.length; i++) {
      var otherPerson = otherStarchart.people[i];
      for (var j = 0; j < newChart.people.length; j++) {
        var myPerson  = newChart.people[j];
        
        if (myPerson.name === otherPerson.name) {
          myPerson.stars += otherPerson.stars;
          break;
        }
      }
    }
    
    return newChart;
  };
  
  Starchart.prototype.toString = function() {
    var str = '';
    for (var i = 0; i < this.people.length; i++) {
      var person = this.people[i];
      str += (person.name + ' ' + person.stars + '\n');
    }
    return str;
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
  
  function fetchStarchart(starchartURL) {
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET', starchartURL);
    
    xhr.addEventListener('readystatechange', function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        currentStarchart = new Starchart(xhr.responseText);
        console.log('Finished star search :D');
      }
    });
    
    xhr.send();
  }
  
  calculateBtn.addEventListener('click', function() {
    if (currentStarchart) {
      var newStarchart = new Starchart(starData.value);
      output.value = currentStarchart.plus(newStarchart).toString();
    }
  });
  
  fetchStarchart('/theusarmy.github.io/data/star-chart.txt');
  console.log('Began star search... v 1.1');
})();
