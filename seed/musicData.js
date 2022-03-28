const db = require('../db')
const { Artist, Song, Album } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artist1 = await new Artist({
    name: 'Kanye West',
    numberofalbums: '12',
    albums: '',
    about:
      'One of the most influential and critically lauded artists of the early 21st century, Kanye West went from hip-hop beatmaker to worldwide hitmaker as his production work for artists such as Jay-Z led to a major-label recording contract and, ultimately, a wildly successful solo career that counted an unbroken string of chart-topping, multi-platinum albums and nearly two-dozen Grammy Awards.'
  })
  artist1.save()

  const artist2 = await new Artist({
    name: 'Kendrick Lamar',
    numberofalbums: '7',
    albums: '',
    about:
      'Indisputably the most acclaimed rap artist of his generation, Kendrick Lamar is one of those rare MCs who has achieved critical and commercial success while earning the respect and support of those who inspired him.'
  })
  artist2.save()

  const album1 = await new Album({
    artist: artist2._id,
    name: 'To Pimp A Butterfly',
    numofsongs: '16',
    songs: '',
    relaseyear: '2015'
  })
  album1.save()

  const album2 = await new Album({
    artist: artist2._id,
    name: 'good kid m.A.A.d city',
    numofsongs: '12',
    songs: '',
    relaseyear: '2012'
  })
  album2.save()

  const album3 = await new Album({
    artist: artist1._id,
    name: 'The Life of Pablo',
    numofsongs: '20',
    songs: '',
    relaseyear: '2016'
  })
  album3.save()

  const album4 = await new Album({
    artist: artist1._id,
    name: 'My Beautiful Dark Twisted Fantasy',
    numofsongs: '12',
    songs: '',
    relaseyear: '2010'
  })
  album4.save()

  const songs = [
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Dark Fantasy',
      duration: '4:40'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Gorgeous',
      duration: '5:57',
      features: 'Kid Cudi, Raekwon'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Power',
      duration: '4:52'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'All Of The Lights',
      duration: '4:59'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Monster',
      duration: '6:18',
      features: 'Jay-Z, Rick Ross, Nicki Minaj, Bon Iver'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'So Appalled',
      duration: '6:37',
      features: 'Jay-Z, Pusha T, CyHi The Prynce, Swizz Beats, RZA'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Devil In A New Dress',
      duration: '5:51',
      features: 'Rick Ross'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Runaway',
      duration: '9:07',
      features: 'Pusha T'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Hell Of A Life',
      duration: '5:27'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Blame Game',
      duration: '7:49',
      features: 'John Legend'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Lost In The World',
      duration: '4:16',
      features: 'Bon Iver'
    },
    {
      artist: artist1._id,
      album: album4._id,
      name: 'Who Will Survive In America',
      duration: '1:38'
    }
  ]
}

const run = async () => {
  await main()
  db.close()
}

run()
