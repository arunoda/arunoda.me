exports.trackPost = function(db, req) {
  const now = Date.now()
  // Rounded to the nearest hour
  const timestamp = new Date(now - (now % (1000 * 60 * 60)))
  const _id = {
    url: req.url,
    timestamp
  }

  db.collection('stats')
    .update({ _id }, { $inc: { view: 1 } }, { upsert: true })
    .catch((err) => {
      console.log(`Error on usage tracking: ${err.message}`)
    })
}
