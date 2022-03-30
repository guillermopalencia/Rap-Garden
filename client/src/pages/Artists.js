import { useState, useEffect } from 'react'
import Artist from '../components/Artist'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Artists = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get('http://localhost:3001/api/artists')
      setArtists(response.data.artist)
    }
    getArtist()
  }, [])
  console.log(artists)

  let navigate = useNavigate()

  const showAlbums = (id) => {
    navigate(`/artist/albums/${id}`)
  }

  return (
    <div>
      <h2> All Artists </h2>
      <section>
        <div>
          {artists.map((artist) => (
            <div key={artist._id}>
              <Artist
                name={artist.name}
                about={artist.about}
                numberofalbums={artist.numberofalbums}
                onClick={() => showAlbums(artist._id)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Artists
