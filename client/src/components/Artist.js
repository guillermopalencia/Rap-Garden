import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const Artist = (props) => {
  // const { id } = useParams()
  let navigate = useNavigate()

  const update = (id) => {
    navigate(`/updateartist/${id}`)
  }

  return (
    <div className="ArtistList">
      <h3 onClick={props.onClick}>{props.name}</h3>
      <p>{props.about}</p>
      <p>{props.numberofalbums} Albums</p>
      <button onClick={() => update(props.id)}>update</button>
    </div>
  )
}

export default Artist

// nav user to /update/{:id}
// make update artist component
// update artist page starts with info from artist
// axios.put('url', req.body)
