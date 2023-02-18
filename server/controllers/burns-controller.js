const knex = require('./../database/db.js')

exports.GetAllBurns = async (req, res) => {
  knex
    .select('*')
    .from('burns')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving burns: ${err}` })
    })
}

exports.InsertBurn = async (req, res) => {
  knex('burns')
    .insert({
      'Username': req.body.username,
      'Quantity': req.body.quantity,
      'Active': req.body.active,
      'Date': new Date()
    })
    .then(() => {
      res.json({ message: `Burn by ${req.body.username} created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating burn: ${err}` })
    })
}

exports.GetTotalBurn = async (req, res) => {
  knex('burns')
    .sum('Quantity')
    .from('burns')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error counting burns: ${err}` })
    })
}