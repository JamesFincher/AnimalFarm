import express from 'express';

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

import Chance from 'chance';
const chance = new Chance();

const animals = [...Array(2500).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
    gender: chance.gender(),
  };
});

app.get('', (req, res) => {
  const q = req.query.q?.toLowerCase() || '';
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(q)
  );

  res.send(results);
});

app.listen(8080, () => console.log('Listening on port http://localhost:8080'));
