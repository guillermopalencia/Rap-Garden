import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

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

  return (
    <div>
      <h1> TrackList </h1>
      <section>
        <div>
          {songs.map((song) => (
            <div key={song._id} className="Songlist">
              <h3>{song.name}</h3>
              <p>{song.features}</p>
              <p>{song.duration}</p>
              <button className="Add">Add to Listen Later </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Songs
