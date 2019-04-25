const express = require('express');

const app = express();

const bols = [
  { bol_id: 123456, customer: 'Walmart', date: '2012-04-24T18:25:43.511Z' },
  { bol_id: 123457, customer: 'Canadian Tire', date: '2012-04-23T18:25:43.511Z' },
  { bol_id: 123458, customer: 'Best Buy', date: '2012-04-25T18:25:43.511Z' },
  { bol_id: 123459, customer: 'Tonys Tacos', date: '2012-04-25T18:25:43.511Z' },
  { bol_id: 123460, customer: 'Rona', date: '2012-04-25T18:25:43.511Z' },
  { bol_id: 123461, customer: 'Lowes', date: '2012-04-25T18:25:43.511Z' },
  { bol_id: 123462, customer: 'Tim the ToolMans Tools', date: '2012-04-25T18:25:43.511Z' }

];

app.get('/api/bols', (req, res) => {
  let searchValue = req.query.SearchValue;
  let filteredBols = [];

  if (searchValue != undefined) {
    searchValue = searchValue.toString();

    bols.forEach(function (bol) {
      const bolID = bol.bol_id.toString();
      const customer = bol.customer.toString();
      const date = bol.date.toString();
      
      if (bolID.indexOf(searchValue) != -1 || customer.indexOf(searchValue) != -1 || date.indexOf(searchValue) != -1) {
        filteredBols.push(bol);
      }
    })
    res.json(filteredBols);

  } else {
    res.json(bols);
  }
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);