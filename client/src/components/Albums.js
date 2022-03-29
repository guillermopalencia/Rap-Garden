const Albums = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.artist}</h2>
      <p>
        {props.numofalbums} {props.releaseyear}
      </p>
    </div>
  )
}
