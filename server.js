const express = require('express');

const app = express();

const bols = [
  { bol_id: 123456, customer_id: 1, date: '2012-04-24T18:25:43' },
  { bol_id: 123457, customer_id: 2, date: '2012-04-23T18:25:43' },
  { bol_id: 123458, customer_id: 3, date: '2012-04-25T18:25:43' },
  { bol_id: 123459, customer_id: 4, date: '2012-04-25T18:25:43' },
  { bol_id: 123460, customer_id: 5, date: '2012-04-25T18:25:43' },
  { bol_id: 123461, customer_id: 6, date: '2012-04-25T18:25:43' },
  { bol_id: 123462, customer_id: 7, date: '2012-04-25T18:25:43' }
];

const customer_info = [
  {customer_id: 1, customer_name: 'Walmart', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 2, customer_name: 'Canadian Tire', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 3, customer_name: 'Best Buy', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 4, customer_name: 'Tonys Tacos', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 5, customer_name: 'Rona', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 5, customer_name: 'Lowes', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},
  {customer_id: 5, customer_name: 'Tim the ToolMans Tools', country: 'Canada', province:'Ontario', city:'Windsor', Address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'}

]

const products = [
{prod_id: 1, name: "Hammer", description:"Made with new carbon reinfored head", qty: 76, unit: "Piece", active:true},
{prod_id: 2, name: "Wrench", description:"Made with new carbon reinfored head", qty: 23, Unit: "Case",active:true},
{prod_id: 3, name: "Plunger", description:"Made with new carbon reinfored head",qty: 49 , Unit: "Piece", active:true},
{prod_id: 4, name: "Towel", description:"Made with new carbon reinfored head",qty: 112, Unit: "Case", active:true},
{prod_id: 5, name: "Screw driver", description:"Made with new carbon reinfored head",qty: 18, Unit: "Piece", active:true},
{prod_id: 6, name: "Tape", description:"Made with new carbon reinfored head",qty: 50, Unit: "Piece", active:true}
];

let data = [];
function buildData(){

}

app.get('/api/bols', (req, res) => {
  let searchValue = req.query.SearchValue;
  let filteredBols = [];

  if (searchValue != undefined) {
    searchValue = searchValue.toString().toLowerCase();

    bols.forEach(function (bol) {
      const bolID = bol.bol_id.toString().toLowerCase();
      const customer = bol.customer.toString().toLowerCase();
      const date = bol.date.toString().toLowerCase();
      
      if (bolID.indexOf(searchValue) != -1 || customer.indexOf(searchValue) != -1 || date.indexOf(searchValue) != -1) {
        filteredBols.push(bol);
      }
    })
    res.json(filteredBols);

  } else {
    res.json(bols);
  }
});

app.get('/api/products', (req, res) => {
    res.json(products);
  
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);