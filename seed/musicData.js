const db = require('../db')
const { Artist, Song, Album } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const artist1 = await new Artist({
    name: 'Kanye West',
    numberofalbums: '12',
    about:
      'One of the most influential and critically lauded artists of the early 21st century, Kanye West went from hip-hop beatmaker to worldwide hitmaker as his production work for artists such as Jay-Z led to a major-label recording contract and, ultimately, a wildly successful solo career that counted an unbroken string of chart-topping, multi-platinum albums and nearly two-dozen Grammy Awards.',
    image:
      'https://www.dailynews.com/wp-content/uploads/2021/12/02-fyffest_dayone_review.0823-9259_.jpg?w=1024'
  })
  artist1.save()

  const artist2 = await new Artist({
    name: 'Kendrick Lamar',
    numberofalbums: '7',
    about:
      'Indisputably the most acclaimed rap artist of his generation, Kendrick Lamar is one of those rare MCs who has achieved critical and commercial success while earning the respect and support of those who inspired him.',
    image:
      'https://media.newyorker.com/photos/5f93325daafdd037851bf7d2/16:9/w_2558,h_1439,c_limit/Pearce-KendrickLamar.jpg'
  })
  artist2.save()

  const album1 = await new Album({
    artist: artist2._id,
    name: 'To Pimp A Butterfly',
    numofsongs: '16',
    releaseyear: '2015',
    image:
      'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/11/1426099817173/f1efb3f4-9a6d-4f78-8ca8-594ab646d198-bestSizeAvailable.jpeg?width=465&quality=45&auto=format&fit=max&dpr=2&s=58fa24dfd0d588f808f741364ff505f4'
  })
  album1.save()

  const album2 = await new Album({
    artist: artist2._id,
    name: 'good kid m.A.A.d city',
    numofsongs: '12',
    releaseyear: '2012',
    image: 'https://m.media-amazon.com/images/I/51CgMxpH7RL._SX425_.jpg'
  })
  album2.save()

  const album3 = await new Album({
    artist: artist1._id,
    name: 'The Life of Pablo',
    numofsongs: '20',
    releaseyear: '2016',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/The_life_of_pablo_alternate.jpg/220px-The_life_of_pablo_alternate.jpg'
  })
  album3.save()

  const album4 = await new Album({
    artist: artist1._id,
    name: 'My Beautiful Dark Twisted Fantasy',
    numofsongs: '12',
    releaseyear: '2010',
    image: 'https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f'
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
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: "Sherane a.k.a Master Splinter's Daughter",
      duration: '4:33'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: "Bitch, Don't Kill My Vibe",
      duration: '5:10'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Backseat Freestyle',
      duration: '3:32'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'The Art of Peer Pressure',
      duration: '5:24'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Money Trees',
      duration: '6:26',
      features: 'Jay Rock'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Poetic Justice',
      duration: '5:00',
      features: 'Drake'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Good Kid',
      duration: '3:34'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'M.A.A.D City',
      duration: '5:50',
      features: 'MC Eiht'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Swimming Pools (Drank)',
      duration: '5:13'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: "Sing About Me, I'm Dying of Thirst",
      duration: '12:03'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Real',
      duration: '7:23',
      features: 'Anna Wise'
    },
    {
      artist: artist2._id,
      album: album2._id,
      name: 'Compton',
      duration: '4:08',
      features: 'Dr Dre'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: "Wesley's Theory",
      duration: '4:47',
      features: 'Thunder Cat'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'For Free? (Interlude)',
      duration: '2:10'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'King Kunta',
      duration: '3:54'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Institutionalized',
      duration: '4:31',
      features: 'Bilal, Anna Wise and Snoop Dogg'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'These Walls',
      duration: '5:00',
      features: 'Bilal, Anna Wise and Thundercat'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'U',
      duration: '4:28'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Alright',
      duration: '3:39'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'For Sale? (Interlude)',
      duration: '4:51'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Momma',
      duration: '4:43'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Hood Politics',
      duration: '4:52'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'How Much a Dollar Cost',
      duration: '4:21',
      features: 'James Fauntleroy and Ronald Isley'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Complexion (A Zulu Love)',
      duration: '4:23',
      features: 'Rapsody'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'The Blacker the Berry',
      duration: '5:28'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: "You Ain't Gotta Lie (Momma Said)",
      duration: '4:01'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'I',
      duration: '5:36'
    },
    {
      artist: artist2._id,
      album: album1._id,
      name: 'Mortal Man',
      duration: '12:07'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Ultralight Beam',
      duration: '5:20'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Father Stretch My Hands, Pt. 1',
      duration: '2:15'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Pt. 2',
      duration: '2:10'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Famous',
      duration: '3:16'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Feedback',
      duration: '2:27'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Low Lights',
      duration: '2:11'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Highlighs',
      duration: '3:19'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Freestyle 4',
      duration: '2:03'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'I Love Kanye',
      duration: '0:44'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Waves',
      duration: '3:01'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'FML',
      duration: '3:56'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Real Friends',
      duration: '4:11'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: '"Wolves"',
      duration: '5:01'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: "Frank's Track",
      duration: '0:38'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Siiiiiiiiilver Surffffeeeeer Intermission',
      duration: '0:56'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: '30 Hours',
      duration: '5:23'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'No More Parties in LA',
      duration: '6:14'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Facts (Charlie Heat Version)',
      duration: '3:20'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Fade',
      duration: '3:13'
    },
    {
      artist: artist1._id,
      album: album3._id,
      name: 'Saint Pablo',
      duration: '6:12'
    }
  ]
  await Song.insertMany(songs)
  console.log('Created songs!')
}

const run = async () => {
  await main()
  db.close()
}

run()
