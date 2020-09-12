const _ = require('lodash');

const numerosBase = {
  0: 'zero',
  1: 'um',
  2: 'dois',
  3: 'três',
  4: 'quatro',
  5: 'cinco',
  6: 'seis',
  7: 'sete',
  8: 'oito',
  9: 'nove',
  10: 'dez',
  11: 'onze',
  12: 'doze',
  13: 'treze',
  14: 'quatorze',
  15: 'quinze',
  16: 'dezesseis',
  17: 'dezessete',
  18: 'dezoito',
  19: 'dezenove',
  20: 'vinte',
  30: 'trinta',
  40: 'quarenta',
  50: 'cinquenta',
  60: 'sessenta',
  70: 'setenta',
  80: 'oitenta',
  90: 'noventa',
  100: 'cento',
  200: 'duzentos',
  300: 'trezentos',
  400: 'quatrocentos',
  500: 'quinhentos',
  600: 'seiscentos',
  700: 'setecentos',
  800: 'oitocentos',
  900: 'novecentos',
  1_000: 'mil',
}

module.exports = function porExtenso(numero) {
  if (numero === 100) return 'cem';
  if (numero in numerosBase) return numerosBase[numero];

  const [unidades, dezenas, centenas, milhares] = _.reverse(quebrarNumeroEmDecimais(numero));

  if (numero > 1000) {
    const somaCentenasDezenasEUnidades = _.sum([centenas, dezenas, unidades]);

    let junção = ' ';
    if (centenas && !_.sum([dezenas, unidades])) {
      junção = ' e ';
    } else if (!centenas) {
      junção = ' e ';
    }

    const multiplicador = milhares / 1_000;
    const milharesReais = milhares / multiplicador;

    const multiplicadorPorExtenso = multiplicador === 1? '': porExtenso(multiplicador);

    let resultado = multiplicadorPorExtenso + ' ' + numerosBase[milharesReais];

    if (_.sum([centenas, dezenas, unidades])) {
      resultado +=  junção + porExtenso(somaCentenasDezenasEUnidades)
    }

    return resultado.trim();
  }

  if (numero > 109) {
    const somaDezenasEUnidades = _.sum([dezenas, unidades]);
    return numerosBase[centenas] + ' e ' + porExtenso(somaDezenasEUnidades);
  }

  let resultado = '';
  if (centenas) resultado += numerosBase[centenas];
  if (dezenas) resultado += numerosBase[dezenas];
  if (unidades) resultado += ' e ' + numerosBase[unidades];

  return resultado;
}

function quebrarNumeroEmDecimais(numero) {
  const partes = [];
  numero.toString().split('').forEach((digito, i, numeroCompleto) => {
    partes.push(Number(digito) * Math.pow(10, numeroCompleto.length - 1 - i));
  });
  return partes;
}