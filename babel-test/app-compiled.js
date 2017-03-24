'use strict';

var age = 100;
var people = ['shital', 'abc'];
var fullnames = people.map(function (name) {
  return 'Hi ' + name;
});

console.log(age, people, fullnames);
