const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('')
});


app.get('/reviews', (req, res) => {
  res.send('')
});

app.get('/reviews/meta', (req, res) => {
  res.send('')
});

app.post('/reviews', (req, res) => {
  res.send('')
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  res.send('')
});

app.put('/reviews/:review_id/report', (req, res) => {
  res.send('')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})