const { expect } = require('chai');
const { it } = require('mocha');
const porExtenso = require('./por-extenso');

it('Converte numeros entre 0 e 20 corretamente', () => {
  expect(porExtenso(0)).to.equal('zero');
  expect(porExtenso(1)).to.equal('um');
  expect(porExtenso(2)).to.equal('dois');
  expect(porExtenso(3)).to.equal('três');
  expect(porExtenso(4)).to.equal('quatro');
  expect(porExtenso(5)).to.equal('cinco');
  expect(porExtenso(6)).to.equal('seis');
  expect(porExtenso(7)).to.equal('sete');
  expect(porExtenso(8)).to.equal('oito');
  expect(porExtenso(9)).to.equal('nove');
  expect(porExtenso(10)).to.equal('dez');
  expect(porExtenso(11)).to.equal('onze');
  expect(porExtenso(12)).to.equal('doze');
  expect(porExtenso(13)).to.equal('treze');
  expect(porExtenso(14)).to.equal('quatorze');
  expect(porExtenso(15)).to.equal('quinze');
  expect(porExtenso(16)).to.equal('dezesseis');
  expect(porExtenso(17)).to.equal('dezessete');
  expect(porExtenso(18)).to.equal('dezoito');
  expect(porExtenso(19)).to.equal('dezenove');
  expect(porExtenso(20)).to.equal('vinte');
});

it('Converte números entre 21 e 29', () => {
  expect(porExtenso(21)).to.equal('vinte e um');
  expect(porExtenso(22)).to.equal('vinte e dois');
  expect(porExtenso(23)).to.equal('vinte e três');
  expect(porExtenso(24)).to.equal('vinte e quatro');
  expect(porExtenso(25)).to.equal('vinte e cinco');
  expect(porExtenso(26)).to.equal('vinte e seis');
  expect(porExtenso(27)).to.equal('vinte e sete');
  expect(porExtenso(28)).to.equal('vinte e oito');
  expect(porExtenso(29)).to.equal('vinte e nove');
});

it('Converte números entre 31 e 99', () => {
  expect(porExtenso(31)).to.equal('trinta e um');
  expect(porExtenso(42)).to.equal('quarenta e dois');
  expect(porExtenso(53)).to.equal('cinquenta e três');
  expect(porExtenso(64)).to.equal('sessenta e quatro');
  expect(porExtenso(75)).to.equal('setenta e cinco');
  expect(porExtenso(86)).to.equal('oitenta e seis');
  expect(porExtenso(97)).to.equal('noventa e sete');
  expect(porExtenso(99)).to.equal('noventa e nove');
});

it('Converte números entre 100 e 109', () => {
  expect(porExtenso(100)).to.equal('cem');
  expect(porExtenso(101)).to.equal('cento e um');
  expect(porExtenso(102)).to.equal('cento e dois');
  expect(porExtenso(103)).to.equal('cento e três');
  expect(porExtenso(104)).to.equal('cento e quatro');
  expect(porExtenso(105)).to.equal('cento e cinco');
  expect(porExtenso(106)).to.equal('cento e seis');
  expect(porExtenso(107)).to.equal('cento e sete');
  expect(porExtenso(108)).to.equal('cento e oito');
  expect(porExtenso(109)).to.equal('cento e nove');
});

it('Converte números entre 110 e 199', () => {
  expect(porExtenso(110)).to.equal('cento e dez');
  expect(porExtenso(117)).to.equal('cento e dezessete');
  expect(porExtenso(123)).to.equal('cento e vinte e três');
  expect(porExtenso(155)).to.equal('cento e cinquenta e cinco');
  expect(porExtenso(199)).to.equal('cento e noventa e nove');
});

it('Converte números entre 200 e 999', () => {
  expect(porExtenso(200)).to.equal('duzentos');
  expect(porExtenso(300)).to.equal('trezentos');
  expect(porExtenso(400)).to.equal('quatrocentos');
  expect(porExtenso(500)).to.equal('quinhentos');
  expect(porExtenso(600)).to.equal('seiscentos');
  expect(porExtenso(700)).to.equal('setecentos');
  expect(porExtenso(800)).to.equal('oitocentos');
  expect(porExtenso(900)).to.equal('novecentos');

  expect(porExtenso(201)).to.equal('duzentos e um');
  expect(porExtenso(310)).to.equal('trezentos e dez');
  expect(porExtenso(424)).to.equal('quatrocentos e vinte e quatro');
  expect(porExtenso(546)).to.equal('quinhentos e quarenta e seis');
  expect(porExtenso(677)).to.equal('seiscentos e setenta e sete');
  expect(porExtenso(781)).to.equal('setecentos e oitenta e um');
  expect(porExtenso(888)).to.equal('oitocentos e oitenta e oito');
  expect(porExtenso(999)).to.equal('novecentos e noventa e nove');
});

it('Converte números entre 1000 e 1999', () => {
  expect(porExtenso(1000)).to.equal('mil');
  expect(porExtenso(1001)).to.equal('mil e um');
  expect(porExtenso(1011)).to.equal('mil e onze');
  expect(porExtenso(1111)).to.equal('mil cento e onze');
  expect(porExtenso(1218)).to.equal('mil duzentos e dezoito');
  expect(porExtenso(1400)).to.equal('mil e quatrocentos');
  expect(porExtenso(1999)).to.equal('mil novecentos e noventa e nove');
});

it('Converte números entre 2000 e 9999', () => {
  expect(porExtenso(2000)).to.equal('dois mil');
  expect(porExtenso(2001)).to.equal('dois mil e um');
  expect(porExtenso(2100)).to.equal('dois mil e cem');
  expect(porExtenso(7409)).to.equal('sete mil quatrocentos e nove');
  expect(porExtenso(9999)).to.equal('nove mil novecentos e noventa e nove');
});