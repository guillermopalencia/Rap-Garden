const { Schema } = require('mongoose')

const AddArtist = new Schema(
  {
    artist: { type: String, required: true },
    numberofalbums: { type: String, required: true },
    about: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = AddArtist
