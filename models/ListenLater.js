const { Schema } = require('mongoose')

const LikedSongs = new Schema(
  {
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
  },
  { timestamps: true }
)

module.exports = LikedSongs
