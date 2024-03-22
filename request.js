
const {
    nuevoFeriado1, nuevoFeriado2, nuevoFeriado3, nuevoFeriado4,
    nuevoFeriado5, nuevoFeriado6, nuevoFeriado7, nuevoFeriado8,
    nuevoFeriado9, nuevoFeriado10, nuevoFeriado11, nuevoFeriado12,
    nuevoFeriado13, nuevoFeriado14, nuevoFeriado15, nuevoFeriado16
} = require('./add');

async function fetchData() {
    try {
        const response = await fetch('https://apis.digital.gob.cl/fl/feriados/2024');
        const data = await response.json();
        data.nuevoFeriado1 = nuevoFeriado1;
        data.nuevoFeriado2 = nuevoFeriado2;
        data.nuevoFeriado3 = nuevoFeriado3;
        data.nuevoFeriado4 = nuevoFeriado4;
        data.nuevoFeriado5 = nuevoFeriado5;
        data.nuevoFeriado6 = nuevoFeriado6;
        data.nuevoFeriado7 = nuevoFeriado7;
        data.nuevoFeriado8 = nuevoFeriado8;
        data.nuevoFeriado9 = nuevoFeriado9;
        data.nuevoFeriado10 = nuevoFeriado10;
        data.nuevoFeriado11 = nuevoFeriado11;
        data.nuevoFeriado12 = nuevoFeriado12;
        data.nuevoFeriado13 = nuevoFeriado13;
        data.nuevoFeriado14 = nuevoFeriado14;
        data.nuevoFeriado15 = nuevoFeriado15;
        data.nuevoFeriado16 = nuevoFeriado16;

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

fetchData();


