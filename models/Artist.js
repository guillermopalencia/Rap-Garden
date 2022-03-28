const { Schema } = require('mongoose')

const Artist = new Schema(
  {
    name: { type: String, required: true },
    numberofalbums: { type: Integer, required: true },
    albums: { type: Schema.Types.ObjectId, ref: 'Album' },
    about: { type: String, requird: true }
  },
  { timestamps: true }
)

module.exports = Artist
