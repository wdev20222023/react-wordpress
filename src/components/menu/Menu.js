import { Link } from 'react-router-dom';

const Menu = ({ children }) => {
	return (
		<>
			<nav className="navbar">
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
			</nav>
			<div>{children}</div>
		</>
		)
}

export default Menu;