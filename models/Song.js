const { Schema } = require('mongoose')

const Song = new Schema(
  {
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    album: { type: Schema.Types.ObjectId, ref: 'Album' },
    name: { type: String, required: true },
    duration: { type: String, required: true },
    features: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Song
