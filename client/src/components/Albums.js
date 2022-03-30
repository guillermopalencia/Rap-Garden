const Albums = (props) => {
  return (
    <div className="AlbumsList" onClick={props.onClick}>
      <div className="space">
        <h1>{props.name}</h1>
      </div>
      <img className="Albumimg" src={props.image} alt={props.name}></img>
      <h4>
        {props.numofsongs} Tracks <br></br>Released In: {props.releaseyear}
      </h4>
    </div>
  )
}

export default Albums
