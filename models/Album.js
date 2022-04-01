const { Schema } = require('mongoose')

const Album = new Schema(
  {
    artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
    name: { type: String, required: true },
    numofsongs: { type: String, required: true },
    releaseyear: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Album
