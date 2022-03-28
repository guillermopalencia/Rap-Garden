const { Album, Song, Artist } = require('../models/index')

const allSongs = async (req, res) => {
  try {
    const songs = await Song.find()
    return res.status(200).json({ songs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const allAlbums = async (req, res) => {
  try {
    const albums = await Album.find()
    return res.status(200).json({ albums })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id)
    if (album) {
      return res.status(200).json({ album })
    }
    return res.status(500).send(error.message)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSongsByAlbum = async (req, res) => {
  try {
    const songs = await Song.find()
    let songList = []
    songs.forEach((song) => {
      if (song.album._id == req.params.id) {
        songList.push(song)
      }
    })
    if (songList) {
      return res.status(200).json({ songList })
    }
    return res.status(404).send('Songs could not be found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAlbumsByArtist = async (req, res) => {
  try {
    const albums = await Album.find()
    let albumList = []
    albums.forEach((album) => {
      if (album.artist._id == req.params.id) {
        albumList.push(album)
      }
    })
    if (albumList) {
      return res.status(200).json({ albumList })
    }
    return res.status(404).send('Albums could not be found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getSongs = async (req, res) => {
  try {
    const songs = await Song.findById(req.params.id)
    if (songs) {
      return res.status(200).json({ songs })
    }
    return res.status(500).send(error.message)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  allSongs,
  allAlbums,
  getAlbum,
  getSongs,
  getSongsByAlbum,
  getAlbumsByArtist
}
