// import {statement} from './statementFile.js'
// C:\Dev\RefaktorJS\ch11\lib\statementFile.js
const statementFile = require('../../lib/statementFile');



describe("create invoice", function() {

  var plays = require('./plays.json');
  var invoices = require('./invoices.json')
  var invoice = invoices[0]

 
  it("should print invoice", function() {
    var expectedString = `Statement for BigCo Hamlet: US$ 650.00 (55 seats) As You Like It: US$ 580.00 (35 seats) Othello: US$ 500.00 (40 seats)Amount owed is US$ 1,730.00You earned 47 credits`.replace(/\s/gm,"")
    var actual = statementFile.statement(invoice, plays).replace(/\s/gm,"")
    console.log(actual)
    console.log(expectedString)
    expect(actual).toEqual(expectedString);

  });

/*
  it("should eqaul Strings", function() {
    var expectedString = `Statement for BigCo\n`
    + ` Hamlet: US$ 650.00 (55 seats)\n`
    +` As You Like It: US$ 580.00 (35 seats)\n`
    +` Othello: US$ 500.00 (40 seats)\n`
    +`Amount owed is US$ 1,730.00\n`
    + `You earned 47 credits\n`
    var actual = statementFile.statement(invoices[0], plays)
    console.log(actual)
    console.log(expectedString)
    expect(actual).toContain(expectedString);
  });
  */
});
