import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./search-bar.css";
const SearchBar = ({ setCountries }) => {
	const [userInput, setUserInput] = useState("");

	const getCountries = async (input) => {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/name/${input}`
			);
			if (!response.ok) throw new Error("Country not found");
			const data = await response.json();
			setCountries(data);
		} catch (error) {}
	};

	const handleChange = (value) => {
		setUserInput(value);
		getCountries(value);
	};
	return (
		<div className="input-wrapper">
			<FaSearch id="search-icon" />
			<input
				type="text"
				placeholder="Type to search ..."
				value={userInput}
				onChange={(e) => {
					handleChange(e.target.value);
				}}
			/>
			{/* <button>Search</button> */}
		</div>
	);
};

export default SearchBar;
