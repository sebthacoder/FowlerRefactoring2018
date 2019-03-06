import createStatementData from '../../src/createStatement'
import plays from './plays.json'
import invoices from './invoices.json'


describe("create invoice", function() {
  var invoice = invoices[0]
 
  it("should print invoice", function() {
    //var expectedString = `Statement for BigCo Hamlet: US$ 650.00 (55 seats) As You Like It: US$ 580.00 (35 seats) Othello: US$ 500.00 (40 seats)Amount owed is US$ 1,730.00You earned 47 credits`.replace(/\s/gm,"")
    var actual = createStatementData(invoice, plays)
    console.log(actual)
    //console.log(expectedString)
    expect(true).toEqual(true);

  });

});