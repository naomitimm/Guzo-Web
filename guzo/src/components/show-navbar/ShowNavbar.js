import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShowComponent = ({ children }) => {
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === "/login") {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
	}, [location]);
	const [showNavbar, setShowNavbar] = useState(true);
	return <div>{showNavbar && children}</div>;
};

export default ShowComponent;
