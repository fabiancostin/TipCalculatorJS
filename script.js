'use strict';

const billInputEl = document.querySelector('#bill');
const peopleInputEl = document.querySelector('#people-no');
const tipBtnFirstEl = document.querySelector('.btn1');
const tipBtnSecondEl = document.querySelector('.btn2');
const tipBtnThirdEl = document.querySelector('.btn3');
const resetBtn = document.querySelector('#reset');
const finalTipEl = document.querySelector('#tip');
const totalEl = document.querySelector('#total-pay');

let bill, finalTip, people, total;
const init = function () {
  bill = 0;
  finalTip = 0;
  people = 0;
  total = 0;
  finalTipEl.textContent = 0;
  totalEl.textContent = 0;
  billInputEl.value = '';
  peopleInputEl.value = '';
};
init();

const showTipAndTotal = function () {
  if (bill !== 0 && people !== 0) {
    finalTipEl.textContent = finalTip.toFixed(2);
    totalEl.textContent = total.toFixed(2);
  } else alert('Please fill the inputs!');
};

tipBtnFirstEl.addEventListener('click', function () {
  bill = Number(billInputEl.value);
  people = Number(peopleInputEl.value);

  finalTip = ((10 / 100) * bill) / people;
  total = bill + finalTip * people;
  showTipAndTotal();
});

tipBtnSecondEl.addEventListener('click', function () {
  bill = Number(billInputEl.value);
  people = Number(peopleInputEl.value);

  finalTip = ((15 / 100) * bill) / people;
  total = bill + finalTip * people;
  showTipAndTotal();
});

tipBtnThirdEl.addEventListener('click', function () {
  bill = Number(billInputEl.value);
  people = Number(peopleInputEl.value);

  finalTip = ((20 / 100) * bill) / people;
  total = bill + finalTip * people;
  showTipAndTotal();
});

resetBtn.addEventListener('click', init);
