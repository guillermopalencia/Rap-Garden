import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateArtist = (props) => {
  const [name, setName] = useState('')
  const [numberofalbums, setNumberOfAlbums] = useState('')
  const [about, setAbout] = useState('')
  const [image, setImage] = useState('')

  const { id } = useParams()

  const handleNameChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleNumberOfAlbumsChange = (e) => {
    e.preventDefault()
    setNumberOfAlbums(e.target.value)
  }

  const handleAboutChange = (e) => {
    e.preventDefault()
    setAbout(e.target.value)
  }

  const handleImageChange = (e) => {
    e.preventDefault()
    setImage(e.target.value)
  }

  let navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    if (name !== '' && numberofalbums != '' && about != '') {
      const details = {
        name: name,
        numberofalbums: numberofalbums,
        about: about,
        image: image
      }
      e.preventDefault()
      axios
        .put(`http://localhost:3001/api/updateartist/${id}`, details)
        .catch((err) => console.log(err))
      navigate(`/artists`)
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <label>
        name:
        <input
          onChange={handleNameChange}
          type="text"
          name="name"
          value={props.name}
        />
      </label>
      <label>
        Number Of albums:
        <input
          onChange={handleNumberOfAlbumsChange}
          type="text"
          name="numberofalbums"
          value={props.numberofalbums}
        />
      </label>
      <label>
        About:
        <input
          onChange={handleAboutChange}
          type="text"
          name="about"
          value={props.about}
        />
      </label>
      <label>
        image:
        <input
          onChange={handleImageChange}
          type="text"
          name="URL"
          value={props.image}
        />
      </label>
      <button type="submit">Update Artist</button>
    </form>
  )
}

export default UpdateArtist
