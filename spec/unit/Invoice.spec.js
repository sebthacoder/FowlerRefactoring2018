// import {statement} from './statementFile.js'
// C:\Dev\RefaktorJS\ch11\lib\statementFile.js
const statementFile = require('../../lib/statementFile');



describe("create invoice", function() {

  var plays = require('./plays.json');
  var invoices = require('./invoices.json')

 
  it("should print invoice", function() {
    var expectedString = `Statement for BigCo Hamlet: US$ 650.00 (55 seats)  As You Like It: US$ 580.00 (35 seats)  Othello: US$ 500.00 (40 seats) Amount owed is US$ 1,730.00 You earned 47 credits`.replace(/\n/gm,"").normalize
    var actual = statementFile.statement(invoices[0], plays).replace(/\n/gm,"").normalize
    expect(actual).toEqual(expectedString);

  });

});
