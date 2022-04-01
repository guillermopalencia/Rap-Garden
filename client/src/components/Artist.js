import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Artist = (props) => {
  let navigate = useNavigate()

  const update = (id) => {
    navigate(`/updateartist/${id}`)
  }

  const deleteArtist = async (id) => {
    await axios.delete(`http://localhost:3001/api/artist/${id}`)
    navigate(`/`)
    navigate(`/artists`)
  }

  return (
    <div className="ArtistList">
      <div id="clickme" onClick={props.onClick}>
        <h3>{props.name}</h3>
        <img className="artistimg" src={props.image} alt={props.name}></img>
      </div>
      <p className="about">{props.about}</p>
      <p>{props.numberofalbums} Albums</p>
      <button id="updatebutton" onClick={() => update(props.id)}>
        update
      </button>
      <button
        className="deletebutton"
        onClick={() => deleteArtist(props.id)}
        id="delete "
      >
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
