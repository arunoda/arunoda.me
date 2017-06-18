const express = require('express')
const next = require('next')
const MongoClient = require('mongodb').MongoClient
const Usage = require('./usage')

const mongoUrl = process.env.MONGO_URL
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

async function run() {
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
    handle(req, res)
    if (db) Usage.trackPost(db, req.url, 'view')
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}

run()
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
