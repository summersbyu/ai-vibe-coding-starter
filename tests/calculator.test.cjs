const assert = require('node:assert/strict');
const {calculatePayment} = require('../docs/app.js');

for (const [amount,rate,discount,payment] of [
  ['1000.00','2.00',2000,98000],
  ['250.00','2.00',500,24500],
  ['1000.00','0.00',0,100000],
  ['99.99','2.00',200,9799],
  ['1000.00','100.00',100000,0],
  ['0.01','100',1,0],
]) {
  const result=calculatePayment(amount,rate);
  assert.equal(result.discountCents,discount);
  assert.equal(result.paymentCents,payment);
}
for (const [amount,rate] of [
  ['', '2'],['-1','2'],['1.001','2'],['1000001','2'],['0','2'],
  ['1000','-1'],['1000','101'],['1000','NaN'],['Infinity','2'],
]) assert.throws(()=>calculatePayment(amount,rate));
console.log('Calculation and invalid-input cases passed.');
