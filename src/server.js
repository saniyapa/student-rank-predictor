const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let historicalData = [
  { score: 240, rank: '1500' },
  { score: 220, rank: '2000' },
  { score: 260, rank: '1000' }
];

// Dummy rank prediction based on simple scoring
app.post('/predict-rank', (req, res) => {
  const { physics, chemistry, biology } = req.body;
  const totalScore = physics + chemistry + biology;

  let predictedRank = 'Not predicted';

  if (totalScore > 240) {
    predictedRank = 'Top 1000';
  } else if (totalScore > 200) {
    predictedRank = '1000-2000';
  } else {
    predictedRank = 'Above 2000';
  }

  res.json({ rank: predictedRank });
});

app.get('/historical-data', (req, res) => {
  res.json(historicalData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
