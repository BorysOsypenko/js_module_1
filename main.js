const a = 'qwertyuiop';
const b = 'asdfghjkl';
const c = 'zxcvbnm';

const d = a.length;
const e = b.length;
const f = c.length;

document.writeln('Length of first string ' + d + ' symbols' + '<br>');
document.writeln('Length of second string ' + e + ' symbols' + '<br>');
document.writeln('Length of third string ' + f + ' symbols' + '<br>');

document.writeln('<br>' + "Symbol at position 0, of first string - '" + a.charAt(0) + "'");
document.writeln('<br>' + "Symbol at position 9, of first string - '" + a.charAt(9) + "'");
document.writeln('<br>' + "Symbol at position 0, of second string - '" + b.charAt(0) + "'");
document.writeln('<br>' + "Symbol at position 8, of second string - '" + b.charAt(8) + "'");
document.writeln('<br>' + "Symbol at position 0, of third string - '" + c.charAt(0) + "'");
document.writeln('<br>' + "Symbol at position 6, of third string - '" + c.charAt(6) + "'");

console.log(a.indexOf('u')); 

