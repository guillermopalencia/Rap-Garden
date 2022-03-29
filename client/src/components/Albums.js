const Albums = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.artist}</h2>
      <p>
        {props.numofsongs} Tracks <br></br>Released In:{props.relaseyear}
      </p>
    </div>
  )
}

export default Albums
