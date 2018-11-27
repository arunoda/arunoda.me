const express = require('express')
const next = require('next')
const MongoClient = require('mongodb').MongoClient
const LRUCache = require('lru-cache')
const Usage = require('./usage')

const mongoUrl = process.env.MONGO_URL
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const pageCache = new LRUCache({ max: 500 })

function renderPost (app, req, res) {
  if (dev) {
    handle(req, res)
    return
  }

  if (pageCache.has(req.path)) {
    res.send(pageCache.get(req.path))
    return
  }

  app
    .renderToHTML(req, res, req.path, req.query)
    .then(html => {
      // Let's cache this page
      // eslint-disable-next-line no-console
      console.log(`CACHE MISS: ${req.path}`)
      pageCache.set(req.path, html)

      // send it
      res.send(html)
    })
    .catch(err => {
      console.error(err.stack)
      app.renderError(err, req, res, req.path, req.query)
    })
}

async function run () {
  let db
  if (mongoUrl) {
    db = await MongoClient.connect(mongoUrl)
    console.log('Connected to MongoDB')
  }

  await app.prepare()
  const server = express()

  server.get('/share', (req, res) => {
    const { redirectTo, slug } = req.query
    res.redirect(redirectTo)
    if (db) Usage.trackPost(db, `/blog/${slug}`, 'share')
  })

  server.get('/blog/:slug', (req, res) => {
    renderPost(app, req, res)
    if (db) Usage.trackPost(db, req.url, 'view')
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(2829, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:2829')
  })
}

run()
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
