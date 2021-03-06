import path from 'path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import App from './containers/ServerApp'
import config from './config'
const app = express()
const PORT = config.port || 3000

app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, '..', 'public'))
app.set('view engine', 'ejs')

const router = express.Router()

router.get('*', (req, res) => {
  let context = {}

  const content = renderToString(App)

  if (context.status == 404) {
    res.status(404)
  }

  if (context.status == 302) {
    res.redirect(302, context.url)
  }

  // res.send(content)
  res.render('prod_index', {title: 'Hello, friend', app: content})
})

app.use('/', router)

/* eslint-disable no-console */
app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info(`Listening on port ${PORT}`)
  }
})
/* eslint-disable no-console */

module.exports = [app, router]