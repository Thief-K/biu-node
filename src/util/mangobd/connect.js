const mongoose = require('mongoose')
const { DATABASE_ADDRESS } = require('../../../config/common')

/**
 * connect to mangodb
 */
function connect() {
  mongoose.connect(DATABASE_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true })
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => {
    console.log('connect successful!')
  })
}

module.exports = connect
