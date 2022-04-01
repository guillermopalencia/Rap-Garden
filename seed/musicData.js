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
      'Indisputably the most acclaimed rap artist of his generation, Kendrick Lamar is one of those rare MCs who has achieved critical and commercial success while earning the respect and support of those who inspired him. After several years of development, Lamar hit his creative and chart-topping stride in the 2010s. Good Kid, M.A.A.D City (2012), the Grammy-winning To Pimp a Butterfly (2015), and the Grammy- and Pulitzer Prize-winning DAMN. (2017), his three proper major-label albums, have displayed an unmatched mix of inventive wordplay and compelling conceptual narratives.',
    image:
      'https://media.newyorker.com/photos/5f93325daafdd037851bf7d2/16:9/w_2558,h_1439,c_limit/Pearce-KendrickLamar.jpg'
  })
  artist2.save()

  const artist3 = await new Artist({
    name: 'SABA',
    numberofalbums: '3',
    about:
      'A successful black independent artist, Saba has rooted his career in an authenticity and musicality that’s made him one of this generation’s most important and unique voices. The Chicago polymath is working on the follow-up to his critically-acclaimed 2018 album CARE FOR ME, for which he earned honors as one of the Tribune’s Chicagoans of the Year and has performed 100+ shows worldwide.',
    image:
      'https://townsquare.media/site/812/files/2017/05/saba-1.jpg?w=980&q=75'
  })
  artist3.save()

  const artist4 = await new Artist({
    name: 'J.I.D',
    numberofalbums: '2',
    about:
      "Born and raised in East Atlanta, J.I.D -- a name adopted and adapted from what his grandmother called him as a jittery child -- first appeared on the Atlanta hip-hop scene with his debut EP, Dicaprio, in 2015. Growing up, J.I.D's first connection with music was through his parents' collection of classic funk and soul LPs. After a stint at Hampton University playing football, J.I.D also hooked up with fellow MCs as part of the Spillage Village collective. By 2012, he had dropped out of college to focus on music, and in 2014 he headed out on what would be a productive tour.",
    image:
      'https://snworksceo.imgix.net/dpn-34s/8808e8e2-6d23-4958-8c39-a8c60a91a1dd.sized-1000x1000.png?w=1000'
  })
  artist4.save()

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

  const album5 = await new Album({
    artist: artist2._id,
    name: 'DAMN.',
    numofsongs: '13',
    releaseyear: '2017',
    image:
      'https://media.pitchfork.com/photos/5929c3e8eb335119a49ed80f/1:1/w_600/31d2b6fd.jpg'
  })
  album5.save()

  const album6 = await new Album({
    artist: artist1._id,
    name: 'Yeezus',
    numofsongs: '10',
    releaseyear: '2013',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Yeezus_album_cover.png/220px-Yeezus_album_cover.png'
  })
  album6.save()

  const album7 = await new Album({
    artist: artist3._id,
    name: 'Care For Me',
    numofsongs: '10',
    releaseyear: '2018',
    image:
      'https://townsquare.media/site/812/files/2018/03/Saba-Care-For-Me-cover.jpg'
  })
  album7.save()

  const album8 = await new Album({
    artist: artist3._id,
    name: 'Few Good Things',
    numofsongs: '14',
    releaseyear: '2022',
    image:
      'https://media.pitchfork.com/photos/61faf9857abffafea7cf05e3/1:1/w_600/Saba-Few-Good-Things.jpg'
  })
  album8.save()

  const album9 = await new Album({
    artist: artist4._id,
    name: 'The Never Story',
    numofsongs: '12',
    releaseyear: '2017',
    image:
      'https://upload.wikimedia.org/wikipedia/en/c/ca/J.I.D_%E2%80%93_The_Never_Story.png'
  })
  album9.save()

  const album10 = await new Album({
    artist: artist4._id,
    name: 'DiCaprio 2',
    numofsongs: '14',
    releaseyear: '2018',
    image:
      'https://media.pitchfork.com/photos/5c094d03869f3505f5adfbf2/1:1/w_600/dicaprio2_JID.jpg'
  })
  album10.save()

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
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'On Sight',
      duration: '2:36'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Black Skinhead',
      duration: '3:08'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'I Am A God',
      duration: '3:51'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'New Slaves',
      duration: '4:16'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Hold My Liquor',
      duration: '5:26'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: "I'm in it",
      duration: '3:54'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Blood On The Leaves',
      duration: '5:59'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Guilt Trip',
      duration: '4:03'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Send It Up',
      duration: '2:58'
    },
    {
      artist: artist1._id,
      album: album6._id,
      name: 'Bound 2',
      duration: '3:49'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'BLOOD.',
      duration: '1:58'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'DNA.',
      duration: '3:05'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'YAH.',
      duration: '2:40'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'ELEMENT.',
      duration: '3:28'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'FEEL.',
      duration: '3:34'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'LOYALTY.',
      duration: '3:47',
      features: 'Rihanna'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'PRIDE.',
      duration: '4:35'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'HUMBLE.',
      duration: '2:57'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'LUST.',
      duration: '5:07'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'LOVE.',
      duration: '3:33',
      features: 'Zacari'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'XXX.',
      duration: '4:14',
      features: 'U2'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'DUCKWORTH.',
      duration: '4:08'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'FEAR.',
      duration: '7:40'
    },
    {
      artist: artist2._id,
      album: album5._id,
      name: 'GOD.',
      duration: '4:08'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'BUSY / SIRENS',
      duration: '5:29'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'BROKEN GIRLS',
      duration: '4:37'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'LIFE',
      duration: '2:42'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'CALLIGRAPHY',
      duration: '3:04'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'FIGHTER',
      duration: '4:42'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'SMILE',
      duration: '3:28'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'LOGOUT',
      duration: '2:30'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'GREY',
      duration: '4:00'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'PROM / KING',
      duration: '7:31'
    },
    {
      artist: artist3._id,
      album: album7._id,
      name: 'HEAVEN ALL AROUND ME',
      duration: '3:32'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Free Samples',
      duration: '2:07',
      features: 'Cheflee'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'One Way or Every N**** With A Budget',
      duration: '2:45'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: "Survivor's Guilt",
      duration: '3:42',
      features: 'G Herbo'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'an Interlude Called "Circus',
      duration: '1:02',
      features: 'Eryn Allen Kane'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Fearmonger',
      duration: '3:41',
      features: 'Daoud'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Come My Way',
      duration: '3:10',
      features: 'Krayzie Bone'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Still',
      duration: '3:45',
      features: '6LACK, Smino'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'A Simpler Time',
      duration: '3:33',
      features: 'Mereba'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Solider',
      duration: '3:05',
      features: 'Pivot Gang'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'If I Had A Dollar',
      duration: '3:13',
      features: 'Benjamin Earl Turner'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Stop That',
      duration: '2:18'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Make Believe',
      duration: '3:41',
      features: 'Foushee'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: '2012',
      duration: '4:20',
      features: 'Day Wave'
    },
    {
      artist: artist3._id,
      album: album8._id,
      name: 'Few Good Things',
      duration: '7:08',
      features: 'Black Thought, Eryn Allen Kane'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Doo Wop',
      duration: '1:15'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'General',
      duration: '3:18'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Never',
      duration: '4:01'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'EdEddnEddy',
      duration: '2:20'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'D/Vision',
      duration: '4:25'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Hereditary',
      duration: '4:03'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'All Bad',
      duration: '4:51'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Underwear',
      duration: '3:34'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: '8701',
      duration: '1:51'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Hoodbooger',
      duration: '2:36'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'Somebody',
      duration: '3:35'
    },
    {
      artist: artist4._id,
      album: album9._id,
      name: 'LAUDER',
      duration: '4:02'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Frequency Change',
      duration: '0:59'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Slick Talk',
      duration: '4:29'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Westbrook',
      duration: '3:57',
      features: 'A$AP Ferg'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Off Deez',
      duration: '3:33',
      features: 'J. Cole'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: '151 Rum',
      duration: '2:36'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Off Da Zoinkys',
      duration: '3:28'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Workin Out',
      duration: '3:46'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Tiiied',
      duration: '4:04',
      features: '6LACK, Ella Mai'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Skrawberries',
      duration: '3:38',
      features: 'BJ The Chicago Kid'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Hot Box',
      duration: '4:51',
      features: 'Method Man, Joey Bada$$'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Mounted Up',
      duration: '3:02'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Just Da Other Day',
      duration: '3:49'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Despacito Too',
      duration: '4:14'
    },
    {
      artist: artist4._id,
      album: album10._id,
      name: 'Hasta Luege - Bonus',
      duration: '3:41'
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
