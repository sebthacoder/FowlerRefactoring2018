import createStatementData from '../../src/createStatement'
import plays from '../../assets/plays.json'
import invoices from '../../assets/invoices.json'
import expected from '../../assets/originalPerformancesObject.json'

import util from 'util'
import fs from 'fs'



describe("create invoice", function() {
  var invoice = invoices[0]
 
  it("should print invoice", function() {
    //var expectedString = `Statement for BigCo Hamlet: US$ 650.00 (55 seats) As You Like It: US$ 580.00 (35 seats) Othello: US$ 500.00 (40 seats)Amount owed is US$ 1,730.00You earned 47 credits`.replace(/\s/gm,"")
    var actual = createStatementData(invoice, plays)
    // create Json for comparison
    //var myJSON = JSON.stringify(actual);
    //fs.writeFileSync('./originalPerformancesObject.json',  util.inspect(myJSON, {showHidden: false, depth: null}) , 'utf-8');      
    expect(expected).toEqual(actual);

  });

});