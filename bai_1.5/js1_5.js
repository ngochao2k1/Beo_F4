let temperature_C = Number(prompt('Enter the temperature in Celsius'));
let temperature_F = (temperature_C * (9/5)) +32 ;
temperature_F = temperature_F.toFixed(1);
alert(temperature_C + ' (C) = ' + temperature_F + ' (F)');
