import path from 'path'
import express from 'express'
import config from './config'
const app = express()
const PORT = config.port || 3000

app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '../public/index.html')
})

/* eslint-disable no-console */
app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`Listening on port ${PORT}`)
  }
})
/* eslint-disable no-console */