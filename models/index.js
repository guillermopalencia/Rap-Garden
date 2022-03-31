const mongoose = require('mongoose')
const AlbumSchema = require('./Album')
const ArtistSchema = require('./Artist')
const SongSchema = require('./Song')
const ListenLaterSchema = require('./ListenLater')
const AddArtistSchema = require('./AddArtist')

const Album = mongoose.model('albums', AlbumSchema)
const Artist = mongoose.model('artists', ArtistSchema)
const Song = mongoose.model('songs', SongSchema)
const ListenLater = mongoose.model('listenlater', ListenLaterSchema)
const AddArtist = mongoose.model('addartist', AddArtistSchema)

module.exports = {
  Album,
  Artist,
  Song,
  ListenLater,
  AddArtist
}
