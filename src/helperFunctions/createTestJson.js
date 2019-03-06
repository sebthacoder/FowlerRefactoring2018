import createStatementData from '../createStatement'
import util from 'util'
import fs from 'fs'

import plays from '../../assets/plays.json'
import invoices from '../../assets/invoices.json'


// not clear how to start this in node

var invoice = invoices[0]
 
function createTestJson() {
    var actual = createStatementData(invoice, plays)
    console.log(actual);
    fs.writeFileSync('./originalPerformancesObject.json',  util.inspect(myJSON, {showHidden: false, depth: null}) , 'utf-8'); 
}