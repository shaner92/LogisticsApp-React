const express = require('express');

const app = express();

const bols = [
  { bol_id: 123456,
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Walmart', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'}, 
    date: '2012-04-24T18:25:43' },
  { bol_id: 123457, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Canadian Tire', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-23T18:25:43' },
  { bol_id: 123458, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Rona', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-25T18:25:43' },
  { bol_id: 123459, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Lowes', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-25T18:25:43' },
  { bol_id: 123460, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Home Hardware', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-25T18:25:43' },
  { bol_id: 123461, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Tim the ToolMan Tools', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-25T18:25:43' },
  { bol_id: 123462, 
    shipper:{name:'Shane\'s Shipping', country:'Canada', province:'Ontario', city:'Chatham', address:'123 Keil Drive', post_code:'N9G 2F4'}, 
    customer:{name: 'Randys Goods', country: 'Canada', province:'Ontario', city:'Windsor', address:'7100 Tecumseh Rd E', post_code:'N8T 1E6'},  
    date: '2012-04-25T18:25:43' }
];

const products = [
{prod_id: 1, name: "Hammer", description:"Made with new carbon reinfored head", qty: 76, unit: "Piece", active:true},
{prod_id: 2, name: "Wrench", description:"Made with new carbon reinfored head", qty: 23, Unit: "Case",active:true},
{prod_id: 3, name: "Plunger", description:"Made with new carbon reinfored head",qty: 49 , Unit: "Piece", active:true},
{prod_id: 4, name: "Towel", description:"Made with new carbon reinfored head",qty: 112, Unit: "Case", active:true},
{prod_id: 5, name: "Screw driver", description:"Made with new carbon reinfored head",qty: 18, Unit: "Piece", active:true},
{prod_id: 6, name: "Tape", description:"Made with new carbon reinfored head",qty: 50, Unit: "Piece", active:true}
];

app.get('/api/bols', (req, res) => {
  let searchValue = req.query.SearchValue;
  let filteredBols = [];
  if (searchValue != undefined) {
    searchValue = searchValue.toString().toLowerCase();

    bols.forEach(function (bol) {
      const bolID = bol.bol_id.toString().toLowerCase();
      const customer = bol.customer.name.toString().toLowerCase();
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

app.get('/api/bol', (req, res) => {
  let searchValue = req.query.SearchValue;

  if (searchValue != undefined) {
    searchValue = searchValue.toString().toLowerCase();

    bols.forEach(function (bol) {
      const bolID = bol.bol_id.toString().toLowerCase();
      if (bolID.indexOf(searchValue) != -1 ) {
        res.json(bol);
      }
    })
  } 
});

app.get('/api/products', (req, res) => {
    res.json(products);
  
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);