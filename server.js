const express = require('express');

const app = express();

app.get('/api/bols', (req, res) => {
  const bols = [
    {bol_id: 123456, customer: 'Walmart', date: '2012-04-24T18:25:43.511Z'},
    {bol_id: 123457, customer: 'Canadian Tire', date: '2012-04-23T18:25:43.511Z'},
    {bol_id: 123458, customer: 'Best Buy', date: '2012-04-25T18:25:43.511Z'},
    {bol_id: 123459, customer: 'Tonys Tacos', date: '2012-04-25T18:25:43.511Z'},
    {bol_id: 123460, customer: 'Rona', date: '2012-04-25T18:25:43.511Z'},
    {bol_id: 123461, customer: 'Lowes', date: '2012-04-25T18:25:43.511Z'},
    {bol_id: 123462, customer: 'Tim the ToolMans Tools', date: '2012-04-25T18:25:43.511Z'}
  
  ];

  res.json(bols);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);