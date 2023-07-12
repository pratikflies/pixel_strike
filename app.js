const path = require('path');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/startGame', function (req, res, next) {
  const player1Name = req.body.player1Name;
  const player2Name = req.body.player2Name;
  const player1Character = req.body.player1Character;
  const player2Character = req.body.player2Character;
  const roundTime = req.body.roundTime;
  res.render('index', {
    player1Name: player1Name,
    player2Name: player2Name,
    player1Character: player1Character,
    player2Character: player2Character,
    roundTime: roundTime,
  });
});

app.get('/', function (req, res, next) {
  return res.render('home');
});

app.use(function (req, res, next) {
  return res.render('404');
});

console.log('Connected');
app.listen(5000);
