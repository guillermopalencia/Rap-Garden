import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import SongsComponent from '../components/SongsComponent'

const Songs = () => {
  const [songs, setSongs] = useState([])
  // const [ids, setId] = useState([])

  const { id } = useParams()

  // useEffect(() => {
  //   const getIds = async () => {
  //     const response = await axios.get(
  //       `http://localhost:3000/album/songs/${id}`
  //     )
  //     setIds(response)
  //   }
  //   getIds()
  // }, [id])

  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/albums/songs/${id}`
      )
      setSongs(response.data.songList)
    }
    getSongs()
  }, [])
  console.log(songs)
  return (
    <div>
      <h2> TrackList </h2>
      <section>
        <div>
          {songs.map((song) => (
            <div key={song._id}>
              {song.name}
              {song.features}
              <br></br>
              {song.duration}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Songs
