import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Songs = () => {
  const [songs, setSongs] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.get(`/api/albums/songs/${id}`)
      setSongs(response.data.songList)
    }
    getSongs()
  }, [])

  return (
    <div>
      <h1> TrackList </h1>
      <section>
        <div className="Container">
          <div className="Songlist">
            <h5>
              Title <br></br>& <br></br>Features
            </h5>
            <img
              className="clock Songlist"
              src="https://icon-library.com/images/duration-icon/duration-icon-11.jpg"
            ></img>
          </div>
          {songs.map((song) => (
            <div key={song._id} className="Songlist">
              <h3>{song.name}</h3>
              <p>{song.duration}</p>
              <p>{song.features}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Songs
