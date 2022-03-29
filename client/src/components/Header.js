import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/artists">Artists</Link>
      </nav>
    </header>
  )
}

export default Header
