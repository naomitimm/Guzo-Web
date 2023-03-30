import "./search-result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const SearchResult = ({ countries }) => {
	console.log(countries);
	return (
		<div className="search-result">
			{countries?.map((country) => {
				return (
					<div className="country-card">
						<img src={country.flags.png} alt={country.flags.png} />

						<div className="text">
							<h3> {country.name.common} </h3>
							<div className="location">
								<FontAwesomeIcon icon={faLocationDot} />
								{country.continents[0]}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default SearchResult;
