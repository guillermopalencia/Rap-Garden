const { Schema } = require('mongoose')

const Album = new Schema(
  {
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    name: { type: String, required: true },
    numofsongs: { type: Integer, required: true },
    songs: { type: Schema.Types.ObjectId, ref: 'Song' },
    relaseyear: { type: Integer, required: true }
  },
  { timestamps: true }
)

module.exports = Album
