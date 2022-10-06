function data() {
    let data = new Date().toDateString();
    let hora = new Date().toLocaleTimeString();
    data = data.split(' ');
    let semana = data[0];
    let dia = data[2];
    let mes = data[1];
    let ano = data[3];

    switch (semana) {
        case 'Sun':
            semana = semana.replace('Sun', 'domingo');
            break;
        case 'Mon':
            semana = semana.replace('Mon', 'segunda-feira');
            break;
        case 'Tue':
            semana = semana.replace('Tue', 'terça-feira');
            break;
        case 'Wed':
            semana = semana.replace('Wed', 'quarta-feira');
            break;
        case 'Thu':
            semana = semana.replace('Thu', 'quinta-feira');
            break;
        case 'Fri':
            semana = semana.replace('Fri', 'sexta-feira');
            break;
        case 'Sat':
            semana = semana.replace('Sat', 'sábado');
            break;
    }

    switch (mes) {
        case 'Jan':
            mes = mes.replace('Jan', 'janeiro');
            break;
        case 'Feb':
            mes = mes.replace('Feb', 'fevereiro');
            break;
        case 'Mar':
            mes = mes.replace('Mar', 'março');
            break;
        case 'Apr':
            mes = mes.replace('Apr', 'abril');
            break;
        case 'May':
            mes = mes.replace('May', 'maio');
            break;
        case 'Jun':
            mes = mes.replace('Jun', 'junho');
            break;
        case 'Jul':
            mes = mes.replace('Jul', 'julho');
            break;
        case 'Aug':
            mes = mes.replace('Aug', 'agosto');
            break;
        case 'Sep':
            mes = mes.replace('Sep', 'setembro');
            break;
        case 'Oct':
            mes = mes.replace('Oct', 'Outubro');
            break;
        case 'Nov':
            mes = mes.replace('Nov', 'novembro');
            break;
        case 'Dec':
            mes = mes.replace('Dec', 'dezembro');
            break;
    }

    return (semana + ', ' + dia + ' de ' + mes + ' de ' + ano + ' ' + hora);
}

console.log(data());