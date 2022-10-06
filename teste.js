let data = new Date();
let dataUTC = data.toUTCString();
let datalocal = data.toLocaleDateString();
let day = data.getDay();
let month = data.getMonth();
let year = data.getFullYear();
let hora = data.toLocaleTimeString();

data = data.toString().replace(' GMT-0300 (Horário Padrão de Brasília)', '');
console.log('Data: ' + data);
data = data.replace('Oct', 'Outubro');
console.log('Data: ' + data);
data = data.replace('Thu', 'Quarta-Feira');
console.log('Data: ' + data);

console.log('Data no Formato UTC: ' + dataUTC);
console.log('Dia: ' + day + ', Mês: ' + month + ', Ano: ' + year);
console.log('Data no Formato Local: ' + datalocal);
console.log('\n\n\n\n Hora: ' + hora);
