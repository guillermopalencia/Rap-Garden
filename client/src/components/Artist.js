const Artist = (props) => {
  return (
    <div className="ArtistList" onClick={props.onClick}>
      <h3>{props.name}</h3>
      <p>{props.about}</p>
      <p>{props.numberofalbums} Albums</p>
    </div>
  )
}

export default Artist
