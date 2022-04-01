import { useState, useEffect } from 'react'
import Artist from '../components/Artist'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ListenLater = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSongs = async () => {
      const response = await axios.post(`/api/songs/:id`)
      setSongs(response.data.songList)
    }
    getSongs()
  }, [])

  console.log(songs)

  return (
    <div>
      <h1>hey</h1>
    </div>
  )
}

export default ListenLater
