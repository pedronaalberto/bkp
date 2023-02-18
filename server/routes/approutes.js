const express = require('express')

const burnsRoutes = require('./../controllers/burns-controller.js')
const highscoresRoutes = require('./../controllers/highscores-controller.js')
const messagesRoutes = require('./../controllers/messages-controller.js')
const wishesRoutes = require('./../controllers/wishes-controller.js')

const router = express.Router()

router.get('/burns/all', burnsRoutes.GetAllBurns)
router.get('/burns/total', burnsRoutes.GetTotalBurn)
router.post('/burns/new', burnsRoutes.InsertBurn)

router.get('/highscores/:game', highscoresRoutes.GetHighscoresFromGame)
router.post('/highscores/new', highscoresRoutes.InsertHighScore)

router.get('/messages', messagesRoutes.GetAllMessages)
router.post('/messages/new', messagesRoutes.InsertMessage)

router.get('/wishes', wishesRoutes.GetAllWishes)
router.post('/wishes/new', wishesRoutes.InsertWish)

module.exports = router