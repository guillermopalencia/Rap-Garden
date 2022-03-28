const { Schema } = require('mongoose')

const ListenLater = new Schema({
  song: { type: Schema.Types.ObjectId, ref: 'Song' },
  artist: { type: Schema.Types.ObjectId, ref: 'Artist' }
})

module.exports = ListenLater
