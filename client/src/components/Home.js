import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  const page = () => {
    navigate('/artists')
  }

  return (
    <div className="Home">
      <h1 className="click" onClick={() => page()}>
        {' '}
        Enter The Rap Garden{' '}
      </h1>
      <br></br>
      <br></br>
      <p>
        {' '}
        You've been formally invited to the Rap Garden <br></br> Enter to find
        all your rap needs{' '}
      </p>
    </div>
  )
}

export default Home
