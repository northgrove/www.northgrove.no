'use strict'


const express = require('express')
const hemlet = require('helmet')
const app = express()


// health
app.get('/isalive', (req, res) => {
  res.send('OK').status(200)
})

app.use(helmet())

app.use('/', express.static('./dist'))

// ERROR HANDLING
app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500).send(err)
  next()
})


// STARTUP
app.listen('8080', () => {
    console.log('www.northgrove.no kjører')
})

module.exports = app
