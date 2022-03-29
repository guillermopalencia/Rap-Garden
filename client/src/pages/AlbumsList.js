import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Albums from '../components/Albums'

const AlbumsList = () => {
  const [albums, setAlbums] = useState([])

  const [artist, setArtist] = useState([])

  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get('http://localhost:3001/api/artists')
      setArtist(response.data.artist[0]._id)
    }
    getArtist()
  }, [])
  console.log(artist)

  useEffect(() => {
    const getAlbumsByArtist = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/artist/albums/${artist}`
      )
      setAlbums(response.data.albumList)
    }
    getAlbumsByArtist()
  }, [artist])

  console.log(albums)

  return (
    <div>
      <h2> Albums </h2>
      <section>
        <div>
          {albums.map((album) => (
            <div key={album._id}>
              <Albums
                name={album.name}
                numofsongs={album.numofsongs}
                relaseyear={album.relaseyear}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AlbumsList
