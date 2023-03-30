import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
const NavBar = () => {
	const [navbar, setNavbar] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 6) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeBackground);
	return (
		<nav className={navbar ? "navbar active" : "navbar"}>
			<a href="/" className="logo">
				<h1 className="appHeadline">Guzo</h1>
			</a>

			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/travel">Travel</Link>
				<Link to="/favorites">Favorites</Link>
				<Link t o="/review">
					Review
				</Link>
				<Link to="/profile">
					<button>SignUp</button>
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
