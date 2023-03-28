const NavBar = () => {
	return (
		<nav className="navbar">
			<a href="/" className="logo">
				<h1 className="appHeadline">Guzo</h1>
			</a>

			<div className="links">
				<a href="/">Home</a>
				<a href="/travel">Travel</a>
				<a href="/favorites">Favorites</a>
				<a href="/review">Review</a>
				<a href="/profile">Profile</a>
			</div>
		</nav>
	);
};

export default NavBar;
