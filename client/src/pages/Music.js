import { useState, useEffect } from 'react'
import Artist from '../components/Artist'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Music = () => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get('http://localhost:3001/api/artists')
      setArtists(response.data.artist)
    }
    getArtist()
  }, [])

  return (
    <div>
      <h2> All Artists </h2>
      <section>
        <div>
          {artists.map((artist) => (
            <div key={artist._id}>
              <Artist name={artist.name} about={artist.about} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Music
