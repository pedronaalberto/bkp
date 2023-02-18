const knex = require('./../database/db.js')

exports.GetAllMessages = async (req, res) => {
  knex
    .select('*')
    .from('messages')
    .then(userData => {
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving messages: ${err}` })
    })
}

exports.InsertMessage = async (req, res) => {
  knex('messages')
    .insert({
      'Username': req.body.username,
      'Message': req.body.message,
      'Active': req.body.active,
      'Date': new Date()
    })
    .then(() => {
      res.json({ message: `Message by ${req.body.username} created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating message: ${err}` })
    })
}