import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AddArtist = () => {
  const [artist, setArtist] = useState('')
  const [numberofalbums, setNumberOfAlbums] = useState('')
  const [about, setAbout] = useState('')

  const handleArtistChange = (e) => {
    e.preventDefault()
    setArtist(e.target.value)
  }

  const handleNumberOfAlbumsChange = (e) => {
    e.preventDefault()
    setNumberOfAlbums(e.target.value)
  }

  const handleAboutChange = (e) => {
    e.preventDefault()
    setAbout(e.target.value)
  }

  let navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    if (artist !== '' && numberofalbums != '' && about != '') {
      const details = {
        artist: artist,
        numberofalbums: numberofalbums,
        about: about
      }
      e.preventDefault()
      axios
        .post('http://localhost:3001/api/artists', details)
        .catch((err) => console.log(err))
      navigate(`/artists`)
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        Artist:
        <input onChange={handleArtistChange} type="text" name="artist" />
      </label>
      <label>
        Number Of albums:
        <input
          onChange={handleNumberOfAlbumsChange}
          type="text"
          name="numberofalbums"
        />
      </label>
      <label>
        About:
        <input onChange={handleAboutChange} type="text" name="About" />
      </label>
      <button type="submit">Submit new artist</button>
    </form>
  )
}

export default AddArtist
