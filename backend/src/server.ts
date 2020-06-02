import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json({ message: 'Rodando com sucesso!' });
});

app.listen(3333);
