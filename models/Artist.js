const { Schema } = require('mongoose')

const Artist = new Schema(
  {
    name: { type: String, required: true },
    numberofalbums: { type: String, required: true },
    about: { type: String, requird: true }
  },
  { timestamps: true }
)

module.exports = Artist
