const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const appRouter = require('./routes/approutes.js')

const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom/server');


const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', appRouter)

let renderReact = require('./renderReact.js');
renderReact(app);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something went bonkers.')
})

app.use(function (req, res, next) {
  res.status(404).send('Bonk tried...but bonk failed to find it.')
})

app.listen(PORT, function() {
  console.log(`Server is bonking on: ${PORT}`)
})