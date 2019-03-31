// type your JavaScript below, then click the RUN button
// you can output to a DIV with the ID output using
// $('#output').html( 'some content'); ... or ...
// document.getElementById('output').innerHTML = 'some content';



var students = [];
students[0] = 'Joe';
students[1] = 'Sam';
students[2] = 'Sally';
students.push('Mark');
students.push('Zed');

alert(students.pop());
alert(students.length);
/*
var x = 0;
while(x < students.length) {
	alert(students[x]);
  x++;
}

*/

var buff = '<ul>';

for (var n = 0; n < students.length; n++) {
	alert(students[n]);
  buff = buff + '<li>' + students[n] + '</li>';
}

buff = buff + '</ul>';
$('#output').html(buff);
