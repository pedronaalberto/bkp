// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, './../database/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// WISHES TABLE
knex.schema.hasTable('wishes').then((exists) => {
      if (!exists) {
        return knex.schema.createTable('wishes', (table)  => {
          table.increments('Id').primary()
          table.string('Username')
          table.string('Wish')
          table.boolean('Active')
          table.datetime('Date')
        })
        .then(() => {
          console.log('Table \'wishes\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    });

// MESSAGES TABLE
knex.schema.hasTable('messages').then((exists) => {
      if (!exists) {
        return knex.schema.createTable('messages', (table)  => {
          table.increments('Id').primary()
          table.string('Username')
          table.string('Message')
          table.boolean('Active')
          table.datetime('Date')
        })
        .then(() => {
          console.log('Table \'messages\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    });

    // BURNS TABLE
    knex.schema.hasTable('burns').then((exists) => {
        if (!exists) {
          return knex.schema.createTable('burns', (table)  => {
            table.increments('Id').primary()
            table.string('Username')
            table.double('Quantity')
            table.boolean('Active')
            table.datetime('Date')
          })
          .then(() => {
            console.log('Table \'burns\' created')
          })
          .catch((error) => {
            console.error(`There was an error creating table: ${error}`)
          })
        }
      })
      .then(() => {
        console.log('done')
      })
      .catch((error) => {
        console.error(`There was an error setting up the database: ${error}`)
      });

      // HIGHSCORES TABLE
    knex.schema.hasTable('highscores').then((exists) => {
        if (!exists) {
          return knex.schema.createTable('highscores', (table)  => {
            table.increments('Id').primary()
            table.string('Username')
            table.string('Game')
            table.integer('Score')
            table.string('Message')
            table.boolean('Active')
            table.datetime('Date')
          })
          .then(() => {
            console.log('Table \'highscores\' created')
          })
          .catch((error) => {
            console.error(`There was an error creating table: ${error}`)
          })
        }
      })
      .then(() => {
        console.log('done')
      })
      .catch((error) => {
        console.error(`There was an error setting up the database: ${error}`)
      });

    // knex.select('*').from('books').then(data => console.log('data:', data)).catch(err => console.log(err))

    module.exports = knex