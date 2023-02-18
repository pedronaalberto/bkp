const knex = require('./../database/db.js')

exports.GetHighscoresFromGame = async (req, res) => {
  knex
    .select('*')
    .from('highscores')
    .where('Game', req.body.game)
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving highscores: ${err}` })
    })
}

exports.InsertHighScore = async (req, res) => {
  knex('highscores')
    .insert({
      'Username': req.body.username,
      'Game': req.body.game,
      'Score': req.body.score,
      'Message': req.body.message,
      'Active': req.body.active,
      'Date': new Date()
    })
    .then(() => {
      res.json({ message: `Highscore by ${req.body.username} created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating highscore: ${err}` })
    })
}