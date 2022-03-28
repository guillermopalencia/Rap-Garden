const { Album, Song, Artist } = require('../models/index')

const allSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json({ songs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  allSongs
}
