import createStatementData from '../createStatement'
import util from 'util'
import fs from 'fs'

import plays from '../../assets/plays.json'
import invoices from '../../assets/invoices.json'


var invoice = invoices[0]
 
function createTestJson() {
    var actual = createStatementData(invoice, plays)
    fs.writeFileSync('../../assets/originalOutput.json',  util.inspect(actual) , 'utf-8');
    //console.log(expectedString)
    expect(true).toEqual(true);

}