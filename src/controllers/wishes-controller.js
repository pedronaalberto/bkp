const knex = require('./../database/db.js')

exports.GetAllWishes = async (req, res) => {
  knex
    .select('*')
    .from('wishes')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving wishes: ${err}` })
    })
}

exports.InsertWish = async (req, res) => {
  knex('wishes')
    .insert({
      'Username': req.body.username,
      'Wish': req.body.wish,
      'Active': req.body.active,
      'Date': new Date()
    })
    .then(() => {
      res.json({ message: `Wish by ${req.body.username} created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating wish: ${err}` })
    })
}