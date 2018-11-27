exports.trackPost = function (db, url, counter) {
  const now = Date.now()
  // Rounded to the nearest hour
  const timestamp = new Date(now - (now % (1000 * 60 * 60)))
  const _id = {
    url,
    timestamp
  }

  const modifier = { $inc: {} }
  modifier['$inc'][counter] = 1

  db.collection('usage')
    .update({ _id }, modifier, { upsert: true })
    .catch((err) => {
      console.log(`Error on usage tracking: ${err.message}`)
    })
}
