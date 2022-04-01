import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/artists">
          Artists
        </Link>
      </nav>
    </header>
  )
}

export default Header
