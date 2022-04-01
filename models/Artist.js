const { Schema } = require('mongoose')

const Artist = new Schema(
  {
    name: { type: String, required: true },
    numberofalbums: { type: String, required: true },
    about: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Artist
