const express = require('express');

const app = express();

app.get('/api/options', (req, res) => {
  const options = [
    {bol_id: 123456, customer: 'Walmart', date: '2012-04-23T18:25:43.511Z'},
    {bol_id: 123457, customer: 'Canadian Tire', date: '2012-04-23T18:25:43.511Z'},
    {bol_id: 123458, customer: 'Best Buy', date: '2012-04-23T18:25:43.511Z'}
  
  ];

  res.json(options);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);