import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Albums from '../components/Albums'

const AlbumsList = () => {
  const [albums, setAlbums] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getAlbumsByArtist = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/artist/albums/${id}`
      )
      setAlbums(response.data.albumList)
    }
    getAlbumsByArtist()
  }, [])
  console.log(albums)

  let navigate = useNavigate()

  const showSongs = (id) => {
    navigate(`/albums/songs/${id}`)
  }

  return (
    <div>
      <h2> Albums </h2>
      <section>
        <div className="container">
          {albums.map((album) => (
            <div key={album._id}>
              <Albums
                name={album.name}
                numofsongs={album.numofsongs}
                releaseyear={album.releaseyear}
                image={album.image}
                onClick={() => showSongs(album._id)}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AlbumsList
