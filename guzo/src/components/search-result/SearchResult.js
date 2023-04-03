import "./search-result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SearchResult = ({ countries }) => {
	return (
		<div className="search-result">
			{countries?.map((country) => {
				return (
					<Link to={`country/${country.name.common}`}>
						<div className="country-card">
							<div className="circle">
								<FontAwesomeIcon icon={faLocationArrow} />
							</div>

							<div className="text">
								<h3> {country.name.common} </h3>
								<div className="location">
									<FontAwesomeIcon icon={faLocationDot} />
									{country.continents[0]}
								</div>
							</div>

							{/* <img src={country.flags.png} alt={country.flags.png} /> */}
						</div>
					</Link>
				);
			})}
		</div>
	);
};
export default SearchResult;
