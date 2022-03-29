import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Albums from '../components/Albums'

const Albums = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const getAlbums = () => {
      const response = await axios.get(
        'http://localhost:3001/api/artist/albums/:id'
      )
    }
    setAlbums(response.data.albums)
  }, [])
  return (
    <div>
      <h2> {Albums.artist} Albums </h2>
      <section>
        <div>
          {Albums.map((album) => (
            <div key={album._id}>
              <Album
                name={album.name}
                artist={album.artist}
                numofalbums={album.numofalbums}
                releaseyear={album.releaseyear}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
