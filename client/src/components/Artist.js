import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Artist = (props) => {
  // const { id } = useParams()
  let navigate = useNavigate()

  // const [ids, setIds] = useState()

  const update = (id) => {
    navigate(`/updateartist/${id}`)
  }

  // useEffect(() => {
  //   const deleteArtist = async () => {
  //     const response = await axios.delete(
  //       `http://localhost:3001/api/artist/${ids}`
  //     )
  //     axios.delete(response)
  //   }
  //   deleteArtist()
  // }, [])

  const deleteArtist = async (id) => {
    await axios.delete(`http://localhost:3001/api/artist/${id}`)
    navigate(`/`)
    navigate(`/artists`)
  }

  return (
    <div className="ArtistList">
      <h3 onClick={props.onClick}>{props.name}</h3>
      <p>{props.about}</p>
      <p>{props.numberofalbums} Albums</p>
      <button onClick={() => update(props.id)}>update</button>
      <button onClick={() => deleteArtist(props.id)} id="delete">
        delete
      </button>
    </div>
  )
}

export default Artist

// nav user to /update/{:id}
// make update artist component
// update artist page starts with info from artist
// axios.put('url', req.body)
