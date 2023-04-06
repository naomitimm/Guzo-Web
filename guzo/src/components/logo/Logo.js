import { Link } from "react-router-dom";
import "./logo.css";
const Logo = () => {
	return (
		<Link to="/" className="logo">
			<h1 className="appHeadline">Guzo</h1>
		</Link>
	);
};

export default Logo;
