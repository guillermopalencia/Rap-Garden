const { Schema } = require('mongoose')

const LikedSongs = new Schema(
  {
    song: { type: Schema.Types.ObjectId, ref: 'Song' },
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' }
  },
  { timestamps: true }
)

module.exports = LikedSongs
