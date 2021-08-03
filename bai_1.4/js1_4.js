const Pi = 3.14 ;
let radius = Number(prompt('Enter the radius of the circle'));
let area = Pi * radius  * radius ; 
area = area.toFixed(1);
alert('The circle area is ' + area );