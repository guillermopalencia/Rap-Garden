import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/artists">Artists</Link>
      </nav>
    </header>
  )
}

export default Header
